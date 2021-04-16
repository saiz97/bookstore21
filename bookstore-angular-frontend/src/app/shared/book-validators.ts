import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BookStoreService } from "./book-store.service";

export class BookValidators {
  static isbnExists(bookservice: BookStoreService) {
    return function(control: FormControl): Observable<{[error: string]: any}> {
      return bookservice.check(control.value).pipe(map(exists => !exists ? null: {isbnExists: {valid: false}}));
    }
  }
}
