import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option-for-principal-table',
  templateUrl: './option-for-principal-table.component.html',
  styleUrls: ['./option-for-principal-table.component.css'],
})
export class OptionForPrincipalTableComponent {
  @Input({ required: true }) filterFunction = (str: string) => {};
}
