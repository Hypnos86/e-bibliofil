import { Component } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { ItemsMenuComponent } from "../items-menu/items-menu.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ItemsMenuComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  menuContent: { title: string, url: string }[] = [
    { title: "Książki", url: 'books' },
    { title: "Autorzy", url: 'authors' },
    { title: "Epoki", url: 'epochs' },
    { title: "Gatunki literackie", url: 'literary-genres' },
    { title: "Rodzaje literackie", url: 'literary-kinds' },
    { title: "Motywy i tematy literackie", url: 'literary-themes' },
  ];
  
  constructor() {}
}
