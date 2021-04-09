import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bs-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: []
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  book: Book;
  bookSub: Subscription = new Subscription();
  removeSub: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookstoreService: BookStoreService
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.bookSub = this.bookstoreService.getSingle(params['isbn'])
      .subscribe((book) => {
        this.book = book;
      });
  }

  getRating(currentRating: number) {
    return new Array(currentRating);
  }

  removeBook() {
    if(confirm("Buch wirklich löschen?")) {
      this.removeSub = this.bookstoreService.removeBook(this.book.isbn).subscribe(res => {
        this.router.navigate(['../'], {relativeTo: this.route });
      });
    }
  }

  ngOnDestroy(): void {
    this.bookSub.unsubscribe();
    this.removeSub.unsubscribe();
  }

}
