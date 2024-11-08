import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrls: ['./box-detail.component.css'],
})
export class BoxDetailComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) tableTitle = '';
  @Input({ required: true }) modifyRoute = '';
  @Input({ required: true }) deleteFunction = () => {};
  @Input({ required: true }) dataSource: any[] = [];
  @Input({ required: true }) displayedColumns: string[] = [];
  @Input({ required: true }) addButtonRoute: string = '';
  @Input({ required: true }) addButtonLabel: string = '';
  @Input({ required: false }) imponibile: number = 0;
  @Input({ required: false }) iva: number = 0;
  @Input({ required: true }) totale: number = 0;
}
