import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogToConfirmData } from 'src/app/core/models/common/global.types';
import { ClientiDto } from 'src/app/core/models/dto/clienti-dto.model';
import { ClientiService } from 'src/app/core/services/clienti.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css'],
})
export class ClienteDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private clientiService: ClientiService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  idClient!: string;
  cliente!: ClientiDto;

  displayedColumns: string[] = [
    'numeroFattura',
    'importo',
    'iva',
    'scadenza',
    'azioni',
  ];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idClient = params['id'];
    });

    this.clientiService
      .getClientById(parseInt(this.idClient))
      .subscribe((response) => {
        this.cliente = response;
      });
  }

  editClient = () => {
    this.router.navigate([`/clienti/modifica/${this.cliente.id}`]);
  };

  deleteClient = () => {
    this.clientiService
      .deleteClient(this.cliente.id ?? 0)
      .subscribe((response) => {
        if (response) {
          this.router.navigate(['/clienti']);
        }
      });
  };

  addFattura = () => {
    this.router.navigate(['/fatture/nuova'], {
      queryParams: { id_cliente: this.cliente.id },
    });
  };

  onViewFattura = (id: number) => {
    this.router.navigate([`/fatture/${id}`]);
  };

  openDialogDeleteClient = (): void => {
    const data: DialogToConfirmData = {
      message: `Sei sicuro di voler cancellare il cliente ${this.cliente.nome}?`,
      content: 'Questa azione non si puo annullare',
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteClient();
      }
    });
  };
}
