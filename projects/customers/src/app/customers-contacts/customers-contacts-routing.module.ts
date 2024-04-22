import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersContactsComponent } from './customers-contacts.component';

const routes: Routes = [
  { path: 'contacts', component: CustomersContactsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersContactsRoutingModule { }
