import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOrdersRoutingModule } from './admin-orders-routing.module';
import { AdminOrdersComponent } from './admin-orders.component';

// import fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormsModule } from '@angular/forms';

// import toastr module
import { ToastrModule } from 'ngx-toastr';
import { AdminOrdersFilterPipe } from './pipes/admin-orders-filter.pipe';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AdminOrdersComponent,
    AdminOrdersFilterPipe,
  ],
  imports: [
    CommonModule,
    AdminOrdersRoutingModule,
    FontAwesomeModule,
    ToastrModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class AdminOrdersModule { }
