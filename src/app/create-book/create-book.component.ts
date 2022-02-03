import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../models/book';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor (private bookService: BookService){}

  ngOnInit(): void {
  }

  title = 'SimpleBookService';
  bookAlert: any;

  //Book fields
  bookForm = new FormGroup({
    bookNameInput: new FormControl(''),
    bookAuthorInput: new FormControl(''),
    bookCategoryInput: new FormControl(''),
    bookDescInput: new FormControl('')
  });

  submitBook() : any {
    let submitBookRequest: Book = {
      BookId: 0,
      BookName: this.bookForm.controls['bookNameInput'].value,
      Author: this.bookForm.controls['bookAuthorInput'].value,
      Category: this.bookForm.controls['bookCategoryInput'].value,
      Description: this.bookForm.controls['bookDescInput'].value,
      Timestamp: ''
    }

    //Post new book to API
    this.bookService.post(submitBookRequest).subscribe(data => 
      this.bookAlert = data
    );;
  }
}
