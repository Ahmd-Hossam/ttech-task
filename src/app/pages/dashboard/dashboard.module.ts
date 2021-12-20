import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { UserAComponent } from './dashboard/components/user-a/user-a.component';
import { UserBComponent } from './dashboard/components/user-b/user-b.component';
import { UserCComponent } from './dashboard/components/user-c/user-c.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    UserAComponent,
    UserBComponent,
    UserCComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbNavModule
  ]
})
export class DashboardModule { }
