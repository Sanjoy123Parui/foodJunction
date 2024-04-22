import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersFooditemsComponent } from './customers-fooditems.component';

const routes: Routes = [
  { path: 'fooditems', component: CustomersFooditemsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersFooditemsRoutingModule { }
