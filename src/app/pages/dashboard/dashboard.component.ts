import { Component, OnInit } from '@angular/core';
import {
  fattureScadonoInThisMonth,
  saldiPerFatture,
} from 'src/app/core/helpers/functions.helpers';
import { ClientiDto } from 'src/app/core/models/dto/clienti-dto.model';
import { FattureDto } from 'src/app/core/models/dto/fatture-dto.model';
import { ClientiService } from 'src/app/core/services/clienti.service';
import { FattureService } from 'src/app/core/services/fatture.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  clienti!: ClientiDto[];
  fatture!: FattureDto[];

  fattureThisMonth!: FattureDto[];
  newUserThisMonth: number = 0;
  saldiQuestoMese: number = 0;
  saldiTotali: number = 0;

  constructor(
    private clientiService: ClientiService,
    private fattureService: FattureService
  ) {}

  ngOnInit(): void {
    this.clientiService.getAllClients().subscribe((data) => {
      console.log(data);
      this.clienti = data;
      this.newUserThisMonth = data.length;
    });

    this.fattureService.getAllFatture().subscribe((data) => {
      this.fatture = data;
      this.fattureThisMonth = fattureScadonoInThisMonth(data);
      this.saldiQuestoMese = saldiPerFatture(this.fattureThisMonth);
      this.saldiTotali = saldiPerFatture(this.fatture);
    });
  }
}
