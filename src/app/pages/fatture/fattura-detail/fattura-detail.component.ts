import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ClientiDTO from 'src/app/core/models/dto/clienti-dto.model';
import { FattureDto } from 'src/app/core/models/dto/fatture-dto.model';
import { ProdottoDto } from 'src/app/core/models/dto/prodotto-dto.model';
import { ClientiService } from 'src/app/core/services/clienti.service';
import { FattureService } from 'src/app/core/services/fatture.service';

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
  };
  cliente!: ClientiDTO;
  imponibileGenerale: number = 0;
  totaleGenerale: number = 0;

  displayedColumns: string[] = [
    'nome',
    'descrizione',
    'prezzo',
    'quantita',
    'totale',
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fattureService: FattureService,
    private clientiService: ClientiService
  ) {}

  idFattura!: number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idFattura = params['id'];
    });
    this.fattureService.getFatturaById(this.idFattura).subscribe((data) => {
      console.log(data);
      this.fattura = data;
      this.calcolaTotali();
      this.clientiService
        .getClientById(this.fattura.cliente)
        .subscribe((data) => {
          this.cliente = data;
        });
    });
  }

  calcolaTotali() {
    if (this.fattura && this.fattura.prodotti) {
      this.imponibileGenerale = this.fattura.prodotti.reduce(
        (total: number, prodotto: any) => {
          return total + prodotto.price * prodotto.quantita;
        },
        0
      );
      this.totaleGenerale =
        this.imponibileGenerale * (1 + this.fattura.iva / 100);
    }
  }

  deleteFattura() {}
}
