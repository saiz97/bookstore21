import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl} from "@angular/forms";
import { BookFactory } from '../shared/book-factory';
import { Book, Image } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { BookFormErrorMessages } from './book-form-error-messages';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  book: Book = BookFactory.empty();
  isUpdatingBook: boolean = false;
  images: FormArray;
  errors: { [key: string]: string } = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private bookstoreSerivce: BookStoreService,
  ) { }

  ngOnInit(): void {
    const isbn = this.route.snapshot.params["isbn"];

    if (isbn) {
      this.isUpdatingBook = true;
      this.bookstoreSerivce.getSingle(isbn).subscribe((book) => {
        this.book = book;
        this.initBook()
      })
    }

    this.initBook();
  }

  initBook() {
    this.buildThumbnailsArray();

    this.bookForm = this.fb.group({
      id: this.book.id,
      title: [this.book.title, Validators.required],
      subtitle: this.book.subtitle,
      isbn: [
        this.book.isbn,
        [Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(13)]
      ],
      date: [this.book.published, Validators.required],
      description: this.book.description,
      rating: [this.book.rating, [Validators.min(0), Validators.max(10)]],
      images: this.images
    });

    this.bookForm.statusChanges.subscribe(() => {
      this.updateErrorMessages();
      console.log("form errors: ", this.errors)
    });
  }

  updateErrorMessages() {
    console.log("form invalid? ", this.bookForm.invalid);
    this.errors = {};

    for(const message of BookFormErrorMessages) {
      const control = this.bookForm.get(message.forControl);
      
      if(control 
        && control.dirty 
        && control.invalid
        && control.errors[message.forValidator]
        && !this.errors[message.forControl]) {
          this.errors[message.forControl] = message.text
      }
    }
  }

  buildThumbnailsArray() {
    this.images = this.fb.array([]);
    for(const img of this.book.images) {
      let fg = this.fb.group({
        id: new FormControl(img.id),
        url: new FormControl(img.url, Validators.required),
        title: new FormControl(img.title, Validators.required)
      });

      this.images.push(fg);
    }
  }

  addThumbnailControl() {
    this.images.push(this.fb.group({url: null, title: null}));
  }

  submitForm() {
    this.bookForm.value.images = this.bookForm.value.images.filter((thumbnail) => thumbnail.url);
  
    const book: Book = BookFactory.fromObject(this.bookForm.value)
    book.authors = this.book.authors;

    if (this.isUpdatingBook) {
      this.bookstoreSerivce.update(book).subscribe(res => {
        this.router.navigate(["../../books", book.isbn], {
          relativeTo: this.route
        });
      });
    } else {
      book.user_id = 1;
      console.log(this.book)
      this.bookstoreSerivce.create(book).subscribe(res => {
        this.book = BookFactory.empty();
        this.bookForm.reset();
        this.router.navigate(["../books"], {
          relativeTo: this.route
        });

      });
    }
  }

}
