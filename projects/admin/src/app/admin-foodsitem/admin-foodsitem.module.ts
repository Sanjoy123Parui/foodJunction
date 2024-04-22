import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminFoodsitemRoutingModule } from './admin-foodsitem-routing.module';
import { AdminFoodsitemComponent } from './admin-foodsitem.component';

// import reactiveform module
import { ReactiveFormsModule } from '@angular/forms';

// import forms module
import { FormsModule } from '@angular/forms';

// import ngx-pagination module
import { NgxPaginationModule } from 'ngx-pagination';

// import fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminFoodsFilterPipe } from './pipes/admin-foods-filter.pipe';


@NgModule({
  declarations: [
    AdminFoodsitemComponent,
    AdminFoodsFilterPipe
  ],
  imports: [
    CommonModule,
    AdminFoodsitemRoutingModule,
    NgxPaginationModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminFoodsitemModule { }
