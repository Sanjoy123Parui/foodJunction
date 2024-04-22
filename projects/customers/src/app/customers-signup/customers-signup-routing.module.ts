import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersSignupComponent } from './customers-signup.component';

const routes: Routes = [
  { path: 'signup', component: CustomersSignupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersSignupRoutingModule { }
