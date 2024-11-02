import { Component, Input } from '@angular/core';
import { Color } from 'src/app/core/models/common/colors.types';

@Component({
  selector: 'app-simple-widgets',
  templateUrl: './simple-widgets.component.html',
  styleUrls: ['./simple-widgets.component.css'],
})
export class SimpleWidgetsComponent {
  @Input({ required: true }) icon = '';
  @Input({ required: true }) background_icon: Extract<
    Color,
    'blue' | 'green' | 'orange' | 'pink'
  > = 'blue';

  get backgroundColorClass(): string {
    switch (this.background_icon) {
      case 'blue':
        return 'my-bg-cyan my-shadow-lg-cyan bg-gradient';
      case 'green':
        return 'my-bg-teal my-shadow-lg-teal bg-gradient';
      case 'orange':
        return 'my-bg-orange my-shadow-lg-orange bg-gradient';
      case 'pink':
        return 'my-bg-pink my-shadow-lg-pink bg-gradient';
      default:
        return 'bg-secondary bg-gradient';
    }
  }
}
