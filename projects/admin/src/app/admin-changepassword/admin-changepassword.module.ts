import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminChangepasswordRoutingModule } from './admin-changepassword-routing.module';
import { AdminChangepasswordComponent } from './admin-changepassword.component';

// import ReactiveForms module
import { ReactiveFormsModule } from '@angular/forms';

// import fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AdminChangepasswordComponent
  ],
  imports: [
    CommonModule,
    AdminChangepasswordRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class AdminChangepasswordModule { }
