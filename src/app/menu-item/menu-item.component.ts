import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-menu-item",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./menu-item.component.html",
  styleUrl: "./menu-item.component.scss",
})
export class MenuItemComponent {
  @Input() title?: string;
  @Input() url?: string;
}
