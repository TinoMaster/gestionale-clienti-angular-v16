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
        return 'blue bg-gradient';
      case 'green':
        return 'green bg-gradient';
      case 'orange':
        return 'orange bg-gradient';
      case 'pink':
        return 'pink bg-gradient';
      default:
        return 'bg-secondary bg-gradient';
    }
  }
}
