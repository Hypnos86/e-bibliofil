import { routes } from "./../app.routes";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { HeaderComponent } from "../home/header/header.component";
import { ItemsCollectionsComponent } from "../reused-components/items-collections/items-collections.component";
import { TitleDisplayComponent } from "../reused-components/title-display/title-display.component";
import { menuItems } from "../shared/data/menu-items";
import { WolneLekturyService } from "../services/wolne-lektury.service";
import { CollectionsInterface } from "../shared/interfaces/collections-interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-collections",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ItemsCollectionsComponent,
    TitleDisplayComponent,
  ],
  templateUrl: "./collections.component.html",
  styleUrl: "./collections.component.scss",
})
export class CollectionsComponent {
  constructor(private service: WolneLekturyService, private router: Router) {}
  
  componentTitle: string = menuItems[0].title;

  collections: CollectionsInterface[] = [];

  ngOnInit(): void {
    this.service
      .getAllCollections()
      .subscribe((response: CollectionsInterface[]) => {
        this.collections = response;
      });
  }

  onBooksSelected(href: string): void {
    this.router.navigate(["/collection", href]);
  }
}
