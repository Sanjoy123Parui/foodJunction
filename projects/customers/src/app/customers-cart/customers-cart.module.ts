import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersCartRoutingModule } from './customers-cart-routing.module';
import { CustomersCartComponent } from './customers-cart.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CustomersCartComponent
  ],
  imports: [
    CommonModule,
    CustomersCartRoutingModule,
    FontAwesomeModule
  ]
})
export class CustomersCartModule { }
