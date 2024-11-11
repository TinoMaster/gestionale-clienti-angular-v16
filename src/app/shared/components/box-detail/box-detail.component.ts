import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrls: ['./box-detail.component.css'],
})
export class BoxDetailComponent {
  @Input({ required: true }) title = '';
  @Input({ required: false }) tableTitle = '';
  @Input({ required: true }) deleteFunction = () => {};
  @Input({ required: true }) editFunction = () => {};
  @Input({ required: false }) addFunction = () => {};
  @Input({ required: false }) dataSource: any[] = [];
  @Input({ required: false }) displayedColumns: string[] = [];
  @Input({ required: false }) addButtonLabel: string = '';
  @Input({ required: false }) imponibile: number = 0;
  @Input({ required: false }) iva: number = 0;
  @Input({ required: true }) totale: number = 0;
  @Input({ required: false }) onView = (id: number) => {};
  @Input({ required: false }) onEdit = (id: number) => {};
  @Input({ required: false }) onDelete = (id: number) => {};

}
