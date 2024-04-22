import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersAboutusComponent } from './customers-aboutus.component';

const routes: Routes = [
  { path: 'aboutus', component: CustomersAboutusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersAboutusRoutingModule { }
