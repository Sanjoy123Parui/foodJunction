import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersHomeRoutingModule } from './customers-home-routing.module';
import { CustomersHomeComponent } from './customers-home.component';


@NgModule({
  declarations: [
    CustomersHomeComponent
  ],
  imports: [
    CommonModule,
    CustomersHomeRoutingModule
  ]
})
export class CustomersHomeModule { }
