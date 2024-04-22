import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersFooditemsRoutingModule } from './customers-fooditems-routing.module';
import { CustomersFooditemsComponent } from './customers-fooditems.component';

// import forms module
import { FormsModule } from '@angular/forms';

// import ngx-pagination module
import { NgxPaginationModule } from 'ngx-pagination';

// import fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import pipes module
import { FoodsFilterPipe } from './pipes/foods-filter.pipe';

@NgModule({
  declarations: [
    CustomersFooditemsComponent,
    FoodsFilterPipe,
  ],
  imports: [
    CommonModule,
    CustomersFooditemsRoutingModule,
    FormsModule,
    NgxPaginationModule,
    FontAwesomeModule
  ]
})
export class CustomersFooditemsModule { }
