import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDasboardComponent } from './admin-dasboard.component';

const routes: Routes = [
  { path: 'dashboard', component: AdminDasboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDasboardRoutingModule { }
