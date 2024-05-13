
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FooterComponent } from "../home/footer/footer.component";
import { HeaderComponent } from "../home/header/header.component";
import { WolneLekturyService } from "../wolne-lektury.service";
import { BooksInterface } from "../interfaces/books-interface";

@Component({
  selector: "app-books",
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: "./books.component.html",
  styleUrl: "./books.component.scss",
})
export class BooksComponent implements OnInit {
  books: BooksInterface[] = [];

  constructor(private wolneLekturyService: WolneLekturyService) {}

  getBooks(): void {
    this.wolneLekturyService
      .getAllBooks()
      .subscribe((response: BooksInterface[]) => {
        this.books = response.slice(0, 50);
        console.log(response);
      });
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
