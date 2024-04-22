import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContactsComponent } from './admin-contacts.component';

const routes: Routes = [
  { path: 'contacts', component: AdminContactsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminContactsRoutingModule { }
