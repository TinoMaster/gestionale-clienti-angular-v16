import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ClientiDTO from 'src/app/core/models/dto/clienti-dto.model';
import { FattureDto } from 'src/app/core/models/dto/fatture-dto.model';
import { ClientiService } from 'src/app/core/services/clienti.service';
import { FattureService } from 'src/app/core/services/fatture.service';

@Component({
  selector: 'app-fatture-nuova',
  templateUrl: './fatture-nuova.component.html',
  styleUrls: ['./fatture-nuova.component.css'],
})
export class FattureNuovaComponent implements OnInit {
  constructor(
    private clientiService: ClientiService,
    private fattureService: FattureService,
    private router: Router
  ) {}

  clientiList!: ClientiDTO[];
  formNuovaFattura!: FormGroup;

  ngOnInit(): void {
    this.clientiService.getAllClients().subscribe((clienti) => {
      this.clientiList = clienti;
    });

    this.formNuovaFattura = new FormGroup({
      numeroFattura: new FormControl('', Validators.required),
      iva: new FormControl('', Validators.required),
      scadenza: new FormControl('', Validators.required),
      cliente: new FormControl('', Validators.required),
    });
  }

  saveFattura() {
    const fatturaToSave: FattureDto = {
      numeroFattura: this.formNuovaFattura.value['numeroFattura'],
      iva: this.formNuovaFattura.value['iva'],
      importo: 0,
      scadenza: this.formNuovaFattura.value['scadenza'],
      cliente: this.formNuovaFattura.value['cliente'],
    };

    this.fattureService.saveFattura(fatturaToSave).subscribe(() => {
      if (fatturaToSave) {
        this.router.navigate(['/fatture']);
      }
    });
  }
}
