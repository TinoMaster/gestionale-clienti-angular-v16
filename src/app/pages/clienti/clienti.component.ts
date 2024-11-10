import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogToConfirmData } from 'src/app/core/models/common/global.types';
import { ClientiDto } from 'src/app/core/models/dto/clienti-dto.model';
import { ClientiService } from 'src/app/core/services/clienti.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css'],
})
export class ClientiComponent implements OnInit {
  clientiList!: ClientiDto[];
  filteredList!: ClientiDto[];
  titleTable!: string;

  displayedColumns: string[] = [
    'nome',
    'cognome',
    'email',
    'qtaFatture',
    'azioni',
  ];

  constructor(
    private clientiService: ClientiService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.clientiService.getAllClients().subscribe((clienti) => {
      this.clientiList = clienti;
      this.filteredList = clienti;
    });
  }

  filtered = (name: string) => {
    if (!name) this.filteredList = this.clientiList;
    else {
      this.filteredList = this.clientiList.filter((clienti) => {
        if (clienti.nome.toLowerCase().includes(name.toLowerCase())) {
          return clienti;
        } else if (clienti.cognome.toLowerCase().includes(name.toLowerCase())) {
          return clienti;
        } else if (clienti.email.toLowerCase().includes(name.toLowerCase())) {
          return clienti;
        } else {
          return null;
        }
      });
    }
  };

  onViewClient = (id: number) => {
    this.router.navigate(['/clienti/', id]);
  };

  onEditClient = (id: number) => {
    this.router.navigate(['/clienti', 'modifica', id]);
  };

  onDeleteClient = (id: number) => {
    this.clientiService.deleteClient(id).subscribe((response) => {
      if (response) {
        this.filteredList = this.filteredList.filter(
          (clienti) => clienti.id !== id
        );
      }
    });
  };

  openDialogDeleteClient = (id: number): void => {
    const data: DialogToConfirmData = {
      message: `Sei sicuro di voler cancellare il cliente?`,
      content:
        'Questa azione non si puo annullare, neanche la cancellazione di tutte le sue fatture',
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onDeleteClient(id);
      }
    });
  };
}
