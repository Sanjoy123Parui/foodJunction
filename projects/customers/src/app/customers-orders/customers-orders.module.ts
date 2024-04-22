import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersOrdersRoutingModule } from './customers-orders-routing.module';
import { CustomersOrdersComponent } from './customers-orders.component';

// import fontawesome library
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CustomersOrdersComponent
  ],
  imports: [
    CommonModule,
    CustomersOrdersRoutingModule,
    FontAwesomeModule
  ]
})
export class CustomersOrdersModule { }
