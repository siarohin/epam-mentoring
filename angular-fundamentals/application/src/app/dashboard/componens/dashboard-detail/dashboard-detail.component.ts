import { Component, Input } from '@angular/core';
import { People } from '../../models/dashboard.interface';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})

export class DashboardDetailComponent {
  @Input()
  detail: People;
  constructor() {

  }

}
