import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdottoServer } from 'src/app/core/models/dto/prodotto-dto.model';
import { ProdottiService } from 'src/app/core/services/prodotti.service';

@Component({
  selector: 'app-prodotto-modifica',
  templateUrl: './prodotto-modifica.component.html',
  styleUrls: ['./prodotto-modifica.component.css'],
})
export class ProdottoModificaComponent implements OnInit {
  constructor(
    private prodottiService: ProdottiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  formModificaProdotto!: FormGroup;
  idProdotto!: number;
  idFattura!: number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const idProdottoStr = params['id'];
      this.idProdotto = parseInt(idProdottoStr);
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      const idFatturaStr = params['idFattura'];
      this.idFattura = parseInt(idFatturaStr);
    });

    this.formModificaProdotto = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      quantita: new FormControl('', Validators.required),
    });

    this.prodottiService
      .getProdottoById(this.idProdotto)
      .subscribe((prodotto) => {
        this.formModificaProdotto.controls['name'].setValue(prodotto.nome);
        this.formModificaProdotto.controls['price'].setValue(prodotto.prezzo);
        this.formModificaProdotto.controls['description'].setValue(
          prodotto.descrizione
        );
        this.formModificaProdotto.controls['quantita'].setValue(
          prodotto.quantita
        );
      });
  }

  updateProdotto() {
    const prodottoToUpdate: ProdottoServer = {
      name: this.formModificaProdotto.controls['name'].value,
      price: this.formModificaProdotto.controls['price'].value,
      description: this.formModificaProdotto.controls['description'].value,
      quantita: this.formModificaProdotto.controls['quantita'].value,
      fattura: this.idFattura,
    };

    this.prodottiService
      .updateProdotto(this.idProdotto, prodottoToUpdate)
      .subscribe((response) => {
        if (response) {
          this.goBack();
        }
      });
  }

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/fatture']);
    }
  }
}
