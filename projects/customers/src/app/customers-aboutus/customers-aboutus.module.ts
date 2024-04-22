import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersAboutusRoutingModule } from './customers-aboutus-routing.module';
import { CustomersAboutusComponent } from './customers-aboutus.component';


@NgModule({
  declarations: [
    CustomersAboutusComponent
  ],
  imports: [
    CommonModule,
    CustomersAboutusRoutingModule
  ]
})
export class CustomersAboutusModule { }
