import { Component, Input, OnInit } from '@angular/core';
import { ClientiDto } from 'src/app/core/models/dto/clienti-dto.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @Input() clienti!: ClientiDto[];
  maxFatturaValue: number = 10000; // Definir un valor máximo de referencia para los porcentajes

  constructor() {}

  ngOnInit(): void {}

  // Calcula el porcentaje de total de facturación basado en un valor máximo de referencia
  getFatturaPercentage(totaleFatture?: number): number {
    return totaleFatture
      ? Math.min((totaleFatture / this.maxFatturaValue) * 100, 100)
      : 0;
  }
}
