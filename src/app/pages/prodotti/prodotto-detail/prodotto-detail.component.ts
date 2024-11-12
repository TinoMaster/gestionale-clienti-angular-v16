import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogToConfirmData } from 'src/app/core/models/common/global.types';
import { ProdottoDto } from 'src/app/core/models/dto/prodotto-dto.model';
import { ProdottiService } from 'src/app/core/services/prodotti.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-prodotto-detail',
  templateUrl: './prodotto-detail.component.html',
  styleUrls: ['./prodotto-detail.component.css'],
})
export class ProdottoDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private prodottiService: ProdottiService,
    private dialog: MatDialog
  ) {}

  idProdotto!: number;
  numeroFattura: string = '';
  prodotto!: ProdottoDto;
  isLoadingProdotto: boolean = false;
  imponibile: number = 0;
  totale: number = 0;
  iva: number = 0;

  ngOnInit(): void {
    this.isLoadingProdotto = true;
    this.activatedRoute.params.subscribe((params) => {
      this.idProdotto = params['id'];
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      const ivaStr = params['iva'];
      this.iva = Number(ivaStr);
      this.numeroFattura = params['numeroFattura'];
    });

    setTimeout(() => {
      this.prodottiService
        .getProdottoById(this.idProdotto)
        .subscribe((response) => {
          this.prodotto = response;
          this.isLoadingProdotto = false;
          this.imponibile = this.prodotto.totale;
          this.totale = this.imponibile * (1 + this.iva);
        });
    }, 300);
  }

  editProdotto = () => {
    this.router.navigate([
      `fatture/${this.prodotto.fattura}/prodotto/modifica`,
      this.idProdotto,
    ]);
  };

  deleteProdotto = () => {
    this.prodottiService.deleteProdotto(this.idProdotto).subscribe((res) => {
      if (res) {
        this.goBack();
      }
    });
  };

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/fatture']);
    }
  }

  openDialogDeleteProdotto = () => {
    const data: DialogToConfirmData = {
      message: 'Sei sicuro di voler eliminare il prodotto?',
      content: 'Questa operazione non può essere annullata',
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteProdotto();
      }
    });
  };
}
