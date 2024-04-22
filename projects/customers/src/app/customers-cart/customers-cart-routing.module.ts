import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersCartComponent } from './customers-cart.component';

const routes: Routes = [
  { path: 'cart', component: CustomersCartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersCartRoutingModule { }
