import { Component, VERSION } from '@angular/core';
import { Book } from './shared/book';

@Component({
  selector: 'bs-root',
  template: `
    <bs-book-list *ngIf="listOn" (showDetailsEvent)="showDetails($event)"></bs-book-list>
    <bs-book-details *ngIf="detailsOn" [book]="book" (showListEvent)="showList()"></bs-book-details>
    `,
  styleUrls: []
})
export class AppComponent  {

  listOn: boolean = true;
  detailsOn: boolean = false;

  book: Book;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(book: Book) {
    this.book = book;
    this.listOn = false;
    this.detailsOn = true;
  }
}
