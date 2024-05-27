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

  getAllBooks(href: string): Observable<BooksInterface[]> {
    // const url = `${href}`;
    return this.http.get<BooksInterface[]>(href);
  }

  getAllAuthors(): Observable<any> {
    const url = `${this.api}/authors/`;
    return this.http.get<AuthorsInterface[]>(url);
  }

  getAuthor(slug: string): Observable<any> {
    return this.http.get(`${this.api}/authors/${slug}`);
  }

  getAllEpochs() {
    const url = `${this.api}/epochs/`;
    return this.http.get(url);
  }

  getEpochDetails(epochSlug: string): Observable<any> {
    return this.http.get(`${this.api}/epochs/${epochSlug}`);
  }

  getAllThemes() {
    const url = `${this.api}/themes/`;
    return this.http.get(url);
  }

  getAllKinds() {
    const url = `${this.api}/kinds/`;
    return this.http.get(url);
  }

  getAllCollections(): Observable<any> {
    const url = `${this.api}/collections/`;
    return this.http.get<CollectionsInterface[]>(url);
  }
}
