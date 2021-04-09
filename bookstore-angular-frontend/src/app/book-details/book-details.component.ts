import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bs-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: []
})
export class BookDetailsComponent implements OnInit {

  book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookstoreService: BookStoreService
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.book = this.bookstoreService.getSingle(params['isbn']);
  }

  getRating(currentRating: number) {
    return new Array(currentRating);
  }

}
