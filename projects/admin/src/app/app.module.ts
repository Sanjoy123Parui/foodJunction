import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// import page-not-found module
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import HttpClient module
import { HttpClientModule } from '@angular/common/http';

// import fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import BrowserAnimations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import ngx-spinner module
import { NgxSpinnerModule } from 'ngx-spinner';

// import ngx-toastr module
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut:2000,
      positionClass:'toast-top-center',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
