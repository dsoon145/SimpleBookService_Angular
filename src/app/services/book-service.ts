import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

//REPLACE WITH YOUR OWN LOCAL HOST ENDPOINT
const ApiEndpoint = 'https://localhost:44350/api/book';

@Injectable()

export class BookService {

  constructor(private http: HttpClient) { }

  //Retrieves all books
  public getAll(): Observable<Book[]> {
    return this.http.get<any>(ApiEndpoint, httpOptions);
  }

  //Retrieves book by ID
  public getByID(bookID: number): Observable<Book> {
    return this.http.get<any>(`${ApiEndpoint}/${bookID}`, httpOptions);
  }

  //Sends newly created book
  public post(createBookRequest: Book): Observable<Book> {
    return this.http.post<Book>(`${ApiEndpoint}/create`, createBookRequest, httpOptions);
  }

  //Sends new fields for existing book
  public put(bookId: number, updateBookRequest: Book): Observable<Book> {
    return this.http.put<Book>(`${ApiEndpoint}/${bookId}/update`, updateBookRequest, httpOptions);
  }
}
