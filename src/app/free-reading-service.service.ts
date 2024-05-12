import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BooksInterface } from "./interfaces/booksInterface";

@Injectable({
  providedIn: "root",
})
export class FreeReadingServiceService {
  getAllBooks() {
    const url = "https://wolnelektury.pl/api/books/?limit=100&offset=0";

    return this.http.get<BooksInterface[]>(url);
  }
  getAllAuthors() {
    const url = "https://wolnelektury.pl/api/authors/";

    return this.http.get(url);
  }
  constructor(private http: HttpClient) {}
}
