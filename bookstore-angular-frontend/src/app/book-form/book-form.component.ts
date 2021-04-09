import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl} from "@angular/forms";
import { BookFactory } from '../shared/book-factory';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';


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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private bookstoreSerivce: BookStoreService,
  ) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({});
  }

  submitForm() {

  }

}
