import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  calculateImponibileByFattura,
  calculateTotaleByFattura,
} from 'src/app/core/helpers/functions.helpers';
import { DialogToConfirmData } from 'src/app/core/models/common/global.types';
import { ClientiDto } from 'src/app/core/models/dto/clienti-dto.model';
import { FattureDto } from 'src/app/core/models/dto/fatture-dto.model';
import { ProdottoDto } from 'src/app/core/models/dto/prodotto-dto.model';
import { ClientiService } from 'src/app/core/services/clienti.service';
import { FattureService } from 'src/app/core/services/fatture.service';
import { ProdottiService } from 'src/app/core/services/prodotti.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-fattura-detail',
  templateUrl: './fattura-detail.component.html',
  styleUrls: ['./fattura-detail.component.css'],
})
export class FatturaDetailComponent {
  fattura: FattureDto = {
    id: 0,
    cliente: 0,
    iva: 0,
    scadenza: '',
    numeroFattura: '',
    importo: 0,
  };
  idFattura!: number;
  prodotti: ProdottoDto[] = [];
  totaleProdotti: number = 0;
  cliente!: ClientiDto;
  imponibileGenerale: number = 0;
  totaleGenerale: number = 0;
  isLoadingFattura: boolean = false;

  displayedColumns: string[] = [
    'nome',
    'descrizione',
    'prezzo',
    'quantita',
    'totale',
    'azioni',
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fattureService: FattureService,
    private clientiService: ClientiService,
    private prodottiService: ProdottiService,
    private router: Router,
    private dialog: MatDialog,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.isLoadingFattura = true;
    this.activatedRoute.params.subscribe((params) => {
      this.idFattura = params['id'];
    });

    setTimeout(() => {
      this.fattureService.getFatturaById(this.idFattura).subscribe((data) => {
        this.fattura = data;
        this.calcolaTotali();
        this.clientiService
          .getClientById(this.fattura.cliente)
          .subscribe((data) => {
            this.cliente = data;
            this.isLoadingFattura = false;

            this.prodotti = this.fattura.prodotti ?? [];
            this.calcolaTotali();
          });
      });
    }, 300);
  }

  calcolaTotali() {
    this.imponibileGenerale = calculateImponibileByFattura(this.prodotti);
    this.totaleGenerale = calculateTotaleByFattura(
      this.imponibileGenerale,
      this.fattura.iva
    );
  }

  editFattura = () => {
    this.router.navigate([`/fatture/modifica/${this.fattura.id}`]);
  };

  deleteFattura = () => {
    this.fattureService.deleteFattura(this.idFattura).subscribe((response) => {
      if (response) {
        this.goBack();
      }
    });
  };

  addProdotto = () => {
    this.router.navigate([`/fatture/${this.idFattura}/prodotto/nuovo`]);
  };

  viewProdotto = (id: number) => {
    this.router.navigate([`/fatture/${this.idFattura}/prodotto/${id}`], {
      queryParams: {
        iva: this.fattura.iva,
        numeroFattura: this.fattura.numeroFattura,
      },
    });
  };

  deleteProdotto = (id: number) => {
    this.prodottiService.deleteProdotto(id).subscribe((response) => {
      if (response) {
        this.prodotti = this.prodotti.filter((p) => p.id !== id);
        this.calcolaTotali();
      }
    });
  };

  openDialogDeleteProdotto = (id: number) => {
    const data: DialogToConfirmData = {
      message: 'Sei sicuro di voler eliminare il prodotto?',
      content: 'Questa operazione non può essere annullata',
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteProdotto(id);
      }
    });
  };

  openDialogDeleteFatture = () => {
    const data: DialogToConfirmData = {
      message: 'Sei sicuro di voler cancellare la fattura?',
      content: 'Questa operazione non si puo annullare',
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteFattura();
      }
    });
  };

  goBack = () => {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/fatture']);
    }
  };
}
