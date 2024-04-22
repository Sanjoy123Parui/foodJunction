import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDasboardRoutingModule } from './admin-dasboard-routing.module';
import { AdminDasboardComponent } from './admin-dasboard.component';


@NgModule({
  declarations: [
    AdminDasboardComponent
  ],
  imports: [
    CommonModule,
    AdminDasboardRoutingModule
  ]
})
export class AdminDasboardModule { }
