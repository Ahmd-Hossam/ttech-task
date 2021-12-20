import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [

  {path:'dashboard',  loadChildren:()=>import('./pages/dashboard/dashboard.module').then(
    d=>d.DashboardModule
  )},


  {path:'login', loadChildren:()=>import('./pages/auth/auth.module').then(
     a => a.AuthModule
  )},

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },


  {
    path: '**',
    component:NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
