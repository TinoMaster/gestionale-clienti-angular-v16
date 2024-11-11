import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { calculateTotalFatture } from 'src/app/core/helpers/functions.helpers';
import { DialogToConfirmData } from 'src/app/core/models/common/global.types';
import { ClientiDto } from 'src/app/core/models/dto/clienti-dto.model';
import { FattureDto } from 'src/app/core/models/dto/fatture-dto.model';
import { ClientiService } from 'src/app/core/services/clienti.service';
import { FattureService } from 'src/app/core/services/fatture.service';
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
    private fatturaService: FattureService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  idClient!: string;
  cliente!: ClientiDto;
  fattureDelCliente: FattureDto[] = [];
  totaleFatture: number = 0;
  isLoadingCliente: boolean = false;

  displayedColumns: string[] = [
    'numeroFattura',
    'importo',
    'iva',
    'scadenza',
    'azioni',
  ];

  ngOnInit(): void {
    this.isLoadingCliente = true;
    this.activatedRoute.params.subscribe((params) => {
      this.idClient = params['id'];
    });

    setTimeout(() => {
      this.clientiService
        .getClientById(parseInt(this.idClient))
        .subscribe((response) => {
          this.cliente = response;
          this.isLoadingCliente = false;

          this.fattureDelCliente = this.cliente.fatture ?? [];
          this.totaleFatture = this.cliente.totaleFatture ?? 0;
        });
    }, 300);
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

  onEditFattura = (id: number) => {
    this.router.navigate([`/fatture/modifica/${id}`]);
  };

  onDeleteFattura = (id: number) => {
    this.fatturaService.deleteFattura(id).subscribe((response) => {
      if (response) {
        this.fattureDelCliente = this.fattureDelCliente.filter(
          (fattura) => fattura.id !== id
        );
        this.totaleFatture = calculateTotalFatture(this.fattureDelCliente);
      }
    });
  };

  openDialogDeleteFattura = (id: number): void => {
    const data: DialogToConfirmData = {
      message: 'Sei sicuro di voler cancellare la fattura?',
      content: 'Questa azione non si puo annullare',
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onDeleteFattura(id);
      }
    });
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
