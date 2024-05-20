import { CollectionsInterface } from "../shared/interfaces/collections-interface";
import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { HeaderComponent } from "../home/header/header.component";
import { TitleDisplayComponent } from "../reused-components/title-display/title-display.component";
import { WolneLekturyService } from "../services/wolne-lektury.service";
import { ItemsCollectionsComponent } from "../reused-components/items-collections/items-collections.component";
import { MenuItemsInterface } from "../shared/interfaces/menu-items-interface";
import { menuItems } from "../shared/data/menu-items";

@Component({
  selector: "app-books",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ItemsCollectionsComponent,
    TitleDisplayComponent,
  ],
  templateUrl: "./books.component.html",
  styleUrl: "./books.component.scss",
})
export class BooksComponent implements OnInit {
  constructor(private wolneLekturyService: WolneLekturyService) {}

  componentTitle: string = menuItems[0].title;

  collections: CollectionsInterface[] = [];

  getCollections(): void {
    this.wolneLekturyService
      .getAllCollections()
      .subscribe((response: CollectionsInterface[]) => {
        this.collections = response;
        console.log(response);
      });
  }

  ngOnInit(): void {
    this.getCollections();
  }
}
