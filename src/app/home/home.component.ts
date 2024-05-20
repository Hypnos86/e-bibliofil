import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { ItemsMenuComponent } from "../reused-components/items-menu/items-menu.component";
import { TitleDisplayComponent } from "../reused-components/title-display/title-display.component";
import { menuItems } from "../shared/data/menu-items";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ItemsMenuComponent,
    TitleDisplayComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  constructor() {}

  menuContent = menuItems;

  showMenu(): void {
    this.menuContent;
  }
}
