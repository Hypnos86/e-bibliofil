import { BooksInterface } from "./../../shared/interfaces/books-interface";
import { CollectionsInterface } from "../../shared/interfaces/collections-interface";
import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { HeaderComponent } from "../../home/header/header.component";
import { TitleDisplayComponent } from "../../reused-components/title-display/title-display.component";
import { WolneLekturyService } from "../../services/wolne-lektury.service";
import { ItemsCollectionsComponent } from "../../reused-components/items-collections/items-collections.component";
import { MenuItemsInterface } from "../../shared/interfaces/menu-items-interface";
import { menuItems } from "../../shared/data/menu-items";
import { ActivatedRoute } from "@angular/router";
import { ItemBackBtnComponent } from "../../reused-components/item-back-btn/item-back-btn.component";

@Component({
  selector: "app-books",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ItemsCollectionsComponent,
    TitleDisplayComponent,
    ItemBackBtnComponent,
  ],
  templateUrl: "./books.component.html",
  styleUrl: "./books.component.scss",
})
export class BooksComponent implements OnInit {
  constructor(
    private service: WolneLekturyService,
    private route: ActivatedRoute
  ) {}

  componentTitle?: string;
  backBtn: string = "collections";
  books: BooksInterface[] = [];
  description?: string;

  ngOnInit(): void {
    const booksHref = this.route.snapshot.paramMap.get("href");
    if (booksHref) {
      this.service.getAllBooks(booksHref).subscribe((object: any) => {
        this.componentTitle = object.title;
        this.description = object.description;
        this.books = object.books;
        console.log(object);
      });
    }
  }
}
