import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerrosComponent } from './perros/perros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerroDetailComponent } from './perro-detail/perro-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PerroDetailComponent },
  {path: 'perros' , component: PerrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
