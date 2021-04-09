import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book, Image, Author } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: []
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  bookSub: Subscription = new Subscription();

  constructor (private bs: BookStoreService) { }

  ngOnInit(): void {
    this.bookSub = this.bs.getAll().subscribe((books) => {
      this.books = books;
    });
  }

  ngOnDestroy(): void {
    this.bookSub.unsubscribe();
  }

}
