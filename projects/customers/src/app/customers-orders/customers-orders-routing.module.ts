import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersOrdersComponent } from './customers-orders.component';

const routes: Routes = [
  { path: 'orders', component: CustomersOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersOrdersRoutingModule { }
