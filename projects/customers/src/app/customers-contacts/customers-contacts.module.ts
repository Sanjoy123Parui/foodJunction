import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersContactsRoutingModule } from './customers-contacts-routing.module';
import { CustomersContactsComponent } from './customers-contacts.component';


@NgModule({
  declarations: [
    CustomersContactsComponent
  ],
  imports: [
    CommonModule,
    CustomersContactsRoutingModule
  ]
})
export class CustomersContactsModule { }
