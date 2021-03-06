import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Book, Author, Image } from './book';

@Injectable()
export class BookStoreService {

  private api: string = "https://bookstore21.s1810456031.student.kwmhgb.at/api";
  private books: Book[];

  constructor(private http: HttpClient) {
    
  }

  getAll(): Observable<Array<Book>> {
    return this.http.get(`${this.api}/books`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get(`${this.api}/book/${isbn}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  removeBook(isbn: string): Observable<any> {
    console.log(`${this.api}/book/${isbn}`)
    return this.http.delete(`${this.api}/book/${isbn}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  create(book: Book) : Observable<any> {
    return this.http.post(`${this.api}/book`, book)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  update(book: Book) : Observable<any> {
    return this.http.put(`${this.api}/book/${book.isbn}`, book)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  check(isbn: string) : Observable<Boolean> {
    return this.http.get<Boolean>(`${this.api}/books/checkisbn/${isbn}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
