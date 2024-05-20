import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { HeaderComponent } from "../home/header/header.component";

@Component({
  selector: "app-authors",
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: "./authors.component.html",
  styleUrl: "./authors.component.scss",
})
export class AuthorsComponent {}
