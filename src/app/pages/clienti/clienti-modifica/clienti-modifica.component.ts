import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiServer } from 'src/app/core/models/dto/clienti-dto.model';
import { ClientiService } from 'src/app/core/services/clienti.service';

@Component({
  selector: 'app-clienti-modifica',
  templateUrl: './clienti-modifica.component.html',
  styleUrls: ['./clienti-modifica.component.css'],
})
export class ClientiModificaComponent implements OnInit {
  constructor(
    private clientiService: ClientiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  idClient!: string;
  formModificaCliente!: FormGroup;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idClient = params['id'];
    });

    this.formModificaCliente = new FormGroup({
      nome: new FormControl('', Validators.required),
      cognome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.clientiService
      .getClientById(parseInt(this.idClient))
      .subscribe((response) => {
        this.formModificaCliente.controls['nome'].setValue(response.nome);
        this.formModificaCliente.controls['cognome'].setValue(response.cognome);
        this.formModificaCliente.controls['email'].setValue(response.email);
      });
  }

  updateCliente() {
    const clienteToUpdate: ClientiServer = {
      nome: this.formModificaCliente.get('nome')?.value,
      cognome: this.formModificaCliente.get('cognome')?.value,
      email: this.formModificaCliente.get('email')?.value,
    };

    this.clientiService
      .updateClient(parseInt(this.idClient), clienteToUpdate)
      .subscribe((response) => {
        if (response) {
          if (window.history.length > 1) {
            this.location.back();
          } else {
            this.router.navigate(['/clienti']);
          }
        }
      });
  }
}
