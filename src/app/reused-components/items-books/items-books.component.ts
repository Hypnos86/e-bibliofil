import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-items-books",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./items-books.component.html",
  styleUrl: "./items-books.component.scss",
})
export class ItemsBooksComponent {
  @Input() title?: string;
  @Input() href?: string;
  @Input() kind?: string;
}
