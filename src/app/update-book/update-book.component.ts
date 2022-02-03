import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../models/book';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor (private bookService: BookService){}

  ngOnInit(): void {
  }
  
  bookSelected : boolean = false;
  bookId: number;
  foundBook: Book;
  bookAlert: any;

  getBookForm = new FormGroup({
    bookIDInput: new FormControl()
  });

  updateBookForm = new FormGroup({
    bookNameInput: new FormControl(''),
    bookAuthorInput: new FormControl(''),
    bookCategoryInput: new FormControl(''),
    bookDescInput: new FormControl('')
  });

  findBook() : any {
    this.bookService.getByID(this.getBookForm.controls['bookIDInput'].value).subscribe((data: Book) => {
      this.bookId = data.BookId;

      //If returns 0, not book found
      if(data.BookId == 0){
        this.bookAlert = "Could not find book!";
        this.bookSelected = false;
      }
      else{
        this.foundBook = data;
        this.bookSelected = true;
        this.bookAlert = "Book found!"

        //Set form to current book values
        this.updateBookForm.controls['bookNameInput'].setValue(data.BookName);
        this.updateBookForm.controls['bookAuthorInput'].setValue(data.Author);
        this.updateBookForm.controls['bookCategoryInput'].setValue(data.Category);
        this.updateBookForm.controls['bookDescInput'].setValue(data.Description);
      }
    });
  }

  updateBook() : any {
    let submitBookRequest: Book = {
      BookId: 0,
      BookName: this.updateBookForm.controls['bookNameInput'].value,
      Author: this.updateBookForm.controls['bookAuthorInput'].value,
      Category: this.updateBookForm.controls['bookCategoryInput'].value,
      Description: this.updateBookForm.controls['bookDescInput'].value,
      Timestamp: ''
    }

    this.bookService.put(this.bookId, submitBookRequest).subscribe(data => {
      this.bookAlert = data
    });
  }
}
