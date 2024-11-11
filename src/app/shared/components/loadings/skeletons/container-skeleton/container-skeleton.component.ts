import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-skeleton',
  templateUrl: './container-skeleton.component.html',
  styleUrls: ['./container-skeleton.component.css'],
})
export class ContainerSkeletonComponent {
  @Input() rowCount: number = 5;

  get rows() {
    return Array(this.rowCount);
  }
}
