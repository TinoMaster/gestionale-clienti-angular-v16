import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  DialogToConfirmData,
  FormFilter,
} from 'src/app/core/models/common/global.types';
import { FattureDto } from 'src/app/core/models/dto/fatture-dto.model';
import { FattureService } from 'src/app/core/services/fatture.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css'],
})
export class FattureComponent implements OnInit {
  isLoadingTable: boolean = false;
  fattureList!: FattureDto[];
  filteredFattureList!: FattureDto[];

  formFilter: FormFilter = {
    scadute: false,
    minImporto: 0,
    maxImporto: 0,
  };

  displayedColumns: string[] = [
    'numeroFattura',
    'importo',
    'iva',
    'scadenza',
    'qtaProdotti',
    'azioni',
  ];

  constructor(
    private fattureService: FattureService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.isLoadingTable = true;
    setTimeout(() => {
      this.fattureService.getAllFatture().subscribe((fatture) => {
        this.fattureList = fatture;
        this.filteredFattureList = fatture;
        this.isLoadingTable = false;
      });
    }, 300);
  }

  toggleFilter = () => {
    this.filteredFattureList = this.fattureList;
    this.formFilter = {
      scadute: false,
      minImporto: 0,
      maxImporto: 0,
    };
  };

  onViewFattura = (id: number) => {
    this.router.navigate(['/fatture/', id]);
  };

  onEditFattura = (id: number) => {
    this.router.navigate(['/fatture', 'modifica', id]);
  };

  onDeleteFattura = (id: number) => {
    this.fattureService.deleteFattura(id).subscribe((response) => {
      if (response) {
        this.filteredFattureList = this.filteredFattureList.filter(
          (fatture) => fatture.id !== id
        );
      }
    });
  };

  searchByName = (name: string) => {
    if (!name) this.filteredFattureList = this.fattureList;
    else {
      this.filteredFattureList = this.fattureList.filter((fatture) => {
        if (fatture.numeroFattura.toLowerCase().includes(name.toLowerCase())) {
          return fatture;
        } else {
          return null;
        }
      });
    }
  };

  onSubmitFilter() {
    this.fattureService.getAllFatture(this.formFilter).subscribe((fatture) => {
      this.filteredFattureList = fatture;
    });
  }

  openDialogDeleteFattura = (id: number) => {
    const data: DialogToConfirmData = {
      message: 'Sei sicuro di voler cancellare la fattura?',
      content: 'Questa operazione è irreversibile',
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onDeleteFattura(id);
      }
    });
  };
}
