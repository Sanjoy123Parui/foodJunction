import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFoodsitemComponent } from './admin-foodsitem.component';

const routes: Routes = [
  { path: 'foodsitem', component: AdminFoodsitemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminFoodsitemRoutingModule { }
