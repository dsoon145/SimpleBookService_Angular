import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css']
})
export class GetBookComponent implements OnInit {
  constructor (private bookService: BookService){}

  ngOnInit(): void {
  }

  //Set table columns
  displayedColumns: string[] = ['BookId', 'BookName', 'Author', 'Category', 'Description', 'Date'];
  dataSource: Book[];

  getAllBooks() : any {
    this.bookService.getAll().subscribe(data => {
      this.dataSource = data
    });
  }
}
