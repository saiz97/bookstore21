import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookStoreService } from './shared/book-store.service';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { BookFormComponent } from './book-form/book-form.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import { TokenInterceptorService } from './shared/token-interceptor.service';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDEAT from '@angular/common/locales/de-AT';
import { CustomPipe } from './shared/custom.pipe';
registerLocaleData(localeDEAT);

@NgModule({
  declarations: [ 
    AppComponent, 
    BookListComponent, 
    BookListItemComponent, 
    BookDetailsComponent, 
    HomeComponent, BookFormComponent, LoginComponent, CustomPipe 
  ],
  imports: [ 
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  bootstrap: [ AppComponent ],
  providers: [ 
    BookStoreService,
    {provide: LOCALE_ID, useValue: 'de-at'},  
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class AppModule { }
