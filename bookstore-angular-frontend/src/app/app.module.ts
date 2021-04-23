import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [ 
    AppComponent, 
    BookListComponent, 
    BookListItemComponent, 
    BookDetailsComponent, 
    HomeComponent, BookFormComponent, LoginComponent 
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
    AuthService
  ]
})
export class AppModule { }
