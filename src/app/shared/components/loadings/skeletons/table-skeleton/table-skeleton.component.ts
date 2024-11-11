import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-skeleton',
  templateUrl: './table-skeleton.component.html',
  styleUrls: ['./table-skeleton.component.css'],
})
export class TableSkeletonComponent {
  @Input() rowCount: number = 2;

  get rows() {
    return Array(this.rowCount); // Genera un array para iterar en el template
  }
}
