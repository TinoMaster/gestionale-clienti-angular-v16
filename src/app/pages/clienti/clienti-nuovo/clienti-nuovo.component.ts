import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientiServer } from 'src/app/core/models/dto/clienti-dto.model';
import { ClientiService } from 'src/app/core/services/clienti.service';

@Component({
  selector: 'app-clienti-nuovo',
  templateUrl: './clienti-nuovo.component.html',
  styleUrls: ['./clienti-nuovo.component.css'],
})
export class ClientiNuovoComponent implements OnInit {
  constructor(
    private clientiService: ClientiService,
    private router: Router,
    private location: Location
  ) {}

  formNuovoCliente!: FormGroup;

  ngOnInit(): void {
    this.formNuovoCliente = new FormGroup({
      nome: new FormControl('', Validators.required),
      cognome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  saveCliente() {
    console.log(this.formNuovoCliente);
    const clienteToSave: ClientiServer = {
      nome: this.formNuovoCliente.get('nome')?.value,
      cognome: this.formNuovoCliente.get('cognome')?.value,
      email: this.formNuovoCliente.get('email')?.value,
    };

    this.clientiService.saveClient(clienteToSave).subscribe((response) => {
      if (response) {
        this.goBack();
      }
    });
  }

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/clienti']);
    }
  }
}
