import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "../home/header/header.component";
import { menuItems } from "../shared/data/menu-items";
import { WolneLekturyService } from "../services/wolne-lektury.service";
import { AuthorsInterface } from "../shared/interfaces/authors-interface";
import { ItemsAuthorsComponent } from "../reused-components/items-authors/items-authors.component";
import { TitleDisplayComponent } from "../reused-components/title-display/title-display.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-authors",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    TitleDisplayComponent,
    ItemsAuthorsComponent,
  ],
  templateUrl: "./authors.component.html",
  styleUrl: "./authors.component.scss",
})
export class AuthorsComponent implements OnInit {
  constructor(private service: WolneLekturyService, private router: Router) {}

  componentTitle: string = menuItems[1].title;

  authors: AuthorsInterface[] = [];

  selectedAuthor: AuthorsInterface | null = null; 

  getAuthors(): void {
    this.service.getAllAuthors().subscribe((response: AuthorsInterface[]) => {
      this.authors = response;
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.getAuthors();
  }

}
