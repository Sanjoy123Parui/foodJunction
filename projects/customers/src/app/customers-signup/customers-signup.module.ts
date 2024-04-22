import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersSignupRoutingModule } from './customers-signup-routing.module';
import { CustomersSignupComponent } from './customers-signup.component';

// import fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import forms module
import { FormsModule } from '@angular/forms';

// import reactiveForms module
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomersSignupComponent
  ],
  imports: [
    CommonModule,
    CustomersSignupRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomersSignupModule { }
