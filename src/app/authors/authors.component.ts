import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FooterComponent } from "../home/footer/footer.component";
import { HeaderComponent } from "../home/header/header.component";

@Component({
  selector: "app-authors",
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: "./authors.component.html",
  styleUrl: "./authors.component.scss",
})
export class AuthorsComponent {}
