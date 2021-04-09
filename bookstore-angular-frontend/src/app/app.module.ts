import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookStoreService } from './shared/book-store.service';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ 
    AppComponent, 
    BookListComponent, 
    BookListItemComponent, 
    BookDetailsComponent, 
    HomeComponent 
  ],
  imports: [ 
    BrowserModule, 
    FormsModule, 
    AppRoutingModule 
  ],
  bootstrap: [ AppComponent ],
  providers: [ 
    BookStoreService,  
  ]
})
export class AppModule { }
