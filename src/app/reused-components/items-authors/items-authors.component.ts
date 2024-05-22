import { CommonModule } from "@angular/common";
import { AuthorsInterface } from "./../../shared/interfaces/authors-interface";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-items-authors",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./items-authors.component.html",
  styleUrl: "./items-authors.component.scss",
})
export class ItemsAuthorsComponent {
  @Input() authors: AuthorsInterface[] = [];
}
