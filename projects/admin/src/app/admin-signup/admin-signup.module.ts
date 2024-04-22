import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSignupRoutingModule } from './admin-signup-routing.module';
import { AdminSignupComponent } from './admin-signup.component';

// import fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import forms module
import { FormsModule } from '@angular/forms';

// import reactive forms module
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminSignupComponent
  ],
  imports: [
    CommonModule,
    AdminSignupRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminSignupModule { }
