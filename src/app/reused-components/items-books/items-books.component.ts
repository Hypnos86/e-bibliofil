import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { BooksInterface } from "../../shared/interfaces/books-interface";

@Component({
  selector: "app-items-books",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./items-books.component.html",
  styleUrl: "./items-books.component.scss",
})
export class ItemsBooksComponent {
  @Input() books?: BooksInterface[] = [];
}
