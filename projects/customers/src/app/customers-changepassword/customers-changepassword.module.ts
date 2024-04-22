import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersChangepasswordRoutingModule } from './customers-changepassword-routing.module';
import { CustomersChangepasswordComponent } from './customers-changepassword.component';

// import reactivforms module
import { ReactiveFormsModule } from '@angular/forms';

// import fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CustomersChangepasswordComponent
  ],
  imports: [
    CommonModule,
    CustomersChangepasswordRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class CustomersChangepasswordModule { }
