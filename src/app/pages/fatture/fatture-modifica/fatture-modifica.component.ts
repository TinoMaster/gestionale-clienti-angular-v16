import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiServer } from 'src/app/core/models/dto/clienti-dto.model';
import { FattureDto } from 'src/app/core/models/dto/fatture-dto.model';
import { ClientiService } from 'src/app/core/services/clienti.service';
import { FattureService } from 'src/app/core/services/fatture.service';

@Component({
  selector: 'app-fatture-modifica',
  templateUrl: './fatture-modifica.component.html',
  styleUrls: ['./fatture-modifica.component.css'],
})
export class FattureModificaComponent implements OnInit {
  constructor(
    private clientiService: ClientiService,
    private fattureService: FattureService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  idFattura!: number;
  clientiList!: ClientiServer[];
  formModificaFattura!: FormGroup;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idFattura = params['id'];
    });

    this.clientiService
      .getAllClients()
      .subscribe((clienti) => (this.clientiList = clienti));

    this.formModificaFattura = new FormGroup({
      numeroFattura: new FormControl('', Validators.required),
      iva: new FormControl('', Validators.required),
      scadenza: new FormControl('', Validators.required),
      cliente: new FormControl('', Validators.required),
    });

    this.fattureService.getFatturaById(this.idFattura).subscribe((fattura) => {
      this.formModificaFattura.controls['numeroFattura'].setValue(
        fattura.numeroFattura
      );
      this.formModificaFattura.controls['iva'].setValue(fattura.iva);
      const parsedDate = new Date(fattura.scadenza);
      this.formModificaFattura.controls['scadenza'].setValue(
        parsedDate.toISOString().split('T')[0]
      );
      this.formModificaFattura.controls['cliente'].setValue(fattura.cliente);
    });
  }

  updateFattura() {
    const fatturaToUpdate: FattureDto = {
      numeroFattura: this.formModificaFattura.value['numeroFattura'],
      iva: this.formModificaFattura.value['iva'],
      scadenza: this.formModificaFattura.value['scadenza'],
      cliente: this.formModificaFattura.value['cliente'],
    };
    this.fattureService
      .updateFattura(this.idFattura, fatturaToUpdate)
      .subscribe(() => {
        if (fatturaToUpdate) {
          this.router.navigate(['/fatture']);
        }
      });
  }
}
