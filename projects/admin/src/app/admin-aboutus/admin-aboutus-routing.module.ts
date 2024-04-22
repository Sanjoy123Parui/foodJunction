import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAboutusComponent } from './admin-aboutus.component';

const routes: Routes = [
  { path: 'aboutus', component: AdminAboutusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAboutusRoutingModule { }
