import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminChangepasswordComponent } from './admin-changepassword.component';

const routes: Routes = [
  { path: 'changepassword', component: AdminChangepasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminChangepasswordRoutingModule { }
