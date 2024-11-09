import { Component, Input } from '@angular/core';

interface BtnAdd {
  route: string;
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-option-for-principal-table',
  templateUrl: './option-for-principal-table.component.html',
  styleUrls: ['./option-for-principal-table.component.css'],
})
export class OptionForPrincipalTableComponent {
  viewFilters: boolean = false;

  @Input({ required: true }) filterFunction = (str: string) => {};
  @Input({ required: true }) btnAdd: BtnAdd = { route: '', label: '' };
  @Input() toggleFilter = () => {};

  toggle() {
    this.viewFilters = !this.viewFilters;
    this.toggleFilter();
  }
}
