import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminContactsRoutingModule } from './admin-contacts-routing.module';
import { AdminContactsComponent } from './admin-contacts.component';


@NgModule({
  declarations: [
    AdminContactsComponent
  ],
  imports: [
    CommonModule,
    AdminContactsRoutingModule
  ]
})
export class AdminContactsModule { }
