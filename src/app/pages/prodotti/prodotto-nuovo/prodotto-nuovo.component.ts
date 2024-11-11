import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdottoServer } from 'src/app/core/models/dto/prodotto-dto.model';
import { ProdottiService } from 'src/app/core/services/prodotti.service';

@Component({
  selector: 'app-prodotto-nuovo',
  templateUrl: './prodotto-nuovo.component.html',
  styleUrls: ['./prodotto-nuovo.component.css'],
})
export class ProdottoNuovoComponent implements OnInit {
  constructor(
    private prodottiService: ProdottiService,
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}

  formNuovoProdotto!: FormGroup;
  idFattura!: number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const idFatturaStr: string = params['idFattura'];
      this.idFattura = parseInt(idFatturaStr);
    });
    this.formNuovoProdotto = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      quantita: new FormControl('', Validators.required),
    });
  }

  saveProdotto() {
    const prodottoToSave: ProdottoServer = {
      name: this.formNuovoProdotto.controls['name'].value,
      price: this.formNuovoProdotto.controls['price'].value,
      description: this.formNuovoProdotto.controls['description'].value,
      quantita: this.formNuovoProdotto.controls['quantita'].value,
      fattura: this.idFattura,
    };

    this.prodottiService
      .createProdotto(prodottoToSave)
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
