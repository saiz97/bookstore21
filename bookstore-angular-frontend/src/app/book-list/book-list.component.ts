import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book, Image, Author } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: []
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor (private bs: BookStoreService) { }

  ngOnInit(): void {
    this.books = this.bs.getAll();

    console.log(this.books);
  }

}
