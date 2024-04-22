import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersChangepasswordComponent } from './customers-changepassword.component';

const routes: Routes = [
  { path: 'resetpassword', component: CustomersChangepasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersChangepasswordRoutingModule { }
