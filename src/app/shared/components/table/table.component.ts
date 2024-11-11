import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit, OnChanges {
  @Input({ required: true }) dataSource: any[] = [];
  @Input() tableTitle = '';
  @Input({ required: true }) displayedColumns: string[] = [];
  @Input({ required: true }) onView = (id: number) => {};
  @Input({ required: true }) onEdit = (id: number) => {};
  @Input({ required: true }) onDelete = (id: number) => {};

  data = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource']) {
      this.data.data = this.dataSource;
      if (this.paginator) {
        this.data.paginator = this.paginator;
      }
    }
  }

  ngAfterViewInit(): void {
    this.data.paginator = this.paginator;
  }
}
