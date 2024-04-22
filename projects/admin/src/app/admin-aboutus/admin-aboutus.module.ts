import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAboutusRoutingModule } from './admin-aboutus-routing.module';
import { AdminAboutusComponent } from './admin-aboutus.component';


@NgModule({
  declarations: [
    AdminAboutusComponent
  ],
  imports: [
    CommonModule,
    AdminAboutusRoutingModule
  ]
})
export class AdminAboutusModule { }
