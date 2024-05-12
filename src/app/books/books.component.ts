import { BooksInterface } from './../interfaces/booksInterface';
import { FreeReadingServiceService } from "./../free-reading-service.service";
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FooterComponent } from "../home/footer/footer.component";
import { HeaderComponent } from "../home/header/header.component";

@Component({
  selector: "app-books",
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: "./books.component.html",
  styleUrl: "./books.component.scss",
})
export class BooksComponent implements OnInit {
  books: BooksInterface[] = [];

  ngOnInit(): void {
    this.freeReadingServiceService.getAllBooks().subscribe((response: BooksInterface[]) => {
      this.books = response.slice(0,50);
      console.log(response);
      
    });
  }

  constructor(private freeReadingServiceService: FreeReadingServiceService) {}
}
