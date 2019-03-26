import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './containers/dashboard/dashboard.component';

import { DashboardCountComponent } from './componens/dashboard-count/dashboard-count.component';
import { DashboardDetailComponent } from './componens/dashboard-detail/dashboard-detail.component';

import { DashboardService } from './dashboard.service';

@NgModule ({
  declarations: [
    DashboardComponent,
    DashboardCountComponent,
    DashboardDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    DashboardService
  ]
})

export class DashboardModule {

}
