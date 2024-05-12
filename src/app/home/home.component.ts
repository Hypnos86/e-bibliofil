import { FreeReadingServiceService } from "./../free-reading-service.service";
import { Component } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, MenuItemComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  menuContent: { title: string, url: string }[] = [
    { title: "Książki", url: 'books' },
    { title: "Autorzy", url: 'authors' },
    { title: "Epiki", url: 'epics' },
    { title: "Gatunki literackie", url: 'literary-genres' },
    { title: "Rodzaje literackie", url: 'literary-types' },
    { title: "Motywy i tematy literackie", url: 'literary-themes' },
  ];
  
  constructor() {}
}
