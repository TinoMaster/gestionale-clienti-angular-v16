import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormFilter } from 'src/app/core/models/common/global.types';
import { FattureDto } from 'src/app/core/models/dto/fatture-dto.model';
import { FattureService } from 'src/app/core/services/fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css'],
})
export class FattureComponent {
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

  constructor(private fattureService: FattureService, private router: Router) {
    this.fattureService.getAllFatture().subscribe((fatture) => {
      this.fattureList = fatture;
      this.filteredFattureList = fatture;
    });
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
}
