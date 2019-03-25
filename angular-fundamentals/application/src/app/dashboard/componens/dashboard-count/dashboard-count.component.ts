import { Component, Input } from '@angular/core';
import { People } from '../../models/dashboard.interface';

@Component({
  selector: 'app-dashboard-count',
  templateUrl: './dashboard-count.component.html',
  styleUrls: ['./dashboard-count.component.scss']
})

export class DashboardCountComponent {
  @Input()
  items: People[];

  checkedInCount(): number {
    if (!this.items) {
      return;
    }
    return this.items.filter((person: People) => {
      return person.isActive;
    }).length;
  }

}
