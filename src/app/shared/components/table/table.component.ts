import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  constructor() {}
  @Input({ required: true }) dataSource: any[] = [];
  @Input() tableTitle = '';
  @Input({ required: true }) displayedColumns: string[] = [];
  @Input({ required: true }) onView = (id: number) => {};
  @Input({ required: true }) onEdit = (id: number) => {};
  @Input({ required: true }) onDelete = (id: number) => {};
}
