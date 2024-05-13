import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BooksInterface } from "./interfaces/books-interface";

@Injectable({
  providedIn: "root",
})
export class WolneLekturyService {
  private api = "https://wolnelektury.pl/api";

  constructor(private http: HttpClient) {}

  getAllBooks() {
    const url = `${this.api}/books/?limit=100&offset=0/`;
    return this.http.get<BooksInterface[]>(url);
  }

  getAllAuthors() {
    const url = `${this.api}/authors/`;
    return this.http.get(url);
  }

  getAllEpochs() {
    const url = `${this.api}/epochs/`;
    return this.http.get(url);
  }

  getAllThemes() {
    const url = `${this.api}/themes/`;
    return this.http.get(url);
  }

  getAllKinds() {
    const url = `${this.api}/kinds/`;
    return this.http.get(url);
  }
}
