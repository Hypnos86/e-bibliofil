import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-items-collections",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./items-collections.component.html",
  styleUrl: "./items-collections.component.scss",
})
export class ItemsCollectionsComponent {
  @Input() href?: string;
  @Input() title?: string;
}
