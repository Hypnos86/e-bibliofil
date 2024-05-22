import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BooksInterface } from "../shared/interfaces/books-interface";
import { CollectionsInterface } from "../shared/interfaces/collections-interface";
import { AuthorsInterface } from "../shared/interfaces/authors-interface";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class WolneLekturyService {
  private api = "https://wolnelektury.pl/api";

  constructor(private http: HttpClient) {}

  getAllBooks(page: number = 1, pageSize: number = 20) {
    const offset = (page - 1) * pageSize;
    const url = `${this.api}/books/?limit=${pageSize}&offset=${offset}/`;
    return this.http.get<BooksInterface[]>(url);
  }

  getAllAuthors() {
    const url = `${this.api}/authors/`;
    return this.http.get<AuthorsInterface[]>(url);
  }

  getAuthor(authorSlug: string) {
    const url = `${this.api}/authors/${authorSlug}}`;
    return this.http.get(url);
  }

  getAuthorDetails(authorSlug: string): Observable<any> {
    return this.http.get<any>(`${this.api}/${authorSlug}/`);
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

  getAllCollections() {
    const url = `${this.api}/collections/`;
    return this.http.get<CollectionsInterface[]>(url);
  }
}
