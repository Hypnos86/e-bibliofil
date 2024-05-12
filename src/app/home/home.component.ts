import { Component } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}
