import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsuserGuard } from 'src/app/shard/gaurd/isuser.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component:DashboardComponent, canActivate: [IsuserGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
