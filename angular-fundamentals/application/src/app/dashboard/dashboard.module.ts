import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './containers/dashboard/dashboard.component';

import { DashboardCountComponent } from './componens/dashboard-count/dashboard-count.component';
import { DashboardDetailComponent } from './componens/dashboard-detail/dashboard-detail.component';

@NgModule ({
  declarations: [
    DashboardComponent,
    DashboardCountComponent,
    DashboardDetailComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DashboardComponent
  ]
})

export class DashboardModule {

}
