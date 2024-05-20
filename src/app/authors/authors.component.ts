import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "../home/header/header.component";
import { menuItems } from "../shared/data/menu-items";
import { TitleDisplayComponent } from "../reused-components/title-display/title-display.component";
import { WolneLekturyService } from "../services/wolne-lektury.service";
import { AuthorsInterface } from "../shared/interfaces/authors-interface";

@Component({
  selector: "app-authors",
  standalone: true,
  imports: [CommonModule, HeaderComponent, TitleDisplayComponent],
  templateUrl: "./authors.component.html",
  styleUrl: "./authors.component.scss",
})
export class AuthorsComponent implements OnInit {
  constructor(private service: WolneLekturyService) {}

  componentTitle: string = menuItems[1].title;

  authors?: AuthorsInterface[] = [];

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
