import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiDto } from 'src/app/core/models/dto/clienti-dto.model';
import { ClientiService } from 'src/app/core/services/clienti.service';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css'],
})
export class ClienteDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private clientiService: ClientiService,
    private router: Router
  ) {}

  idClient!: string;
  cliente!: ClientiDto;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idClient = params['id'];
    });

    this.clientiService
      .getClientById(parseInt(this.idClient))
      .subscribe((response) => {
        this.cliente = response;
      });
  }

  deleteClient(id: number) {
    this.clientiService.deleteClient(id).subscribe((response) => {
      if (response) {
        this.router.navigate(['/clienti']);
      }
    });
  }
}
