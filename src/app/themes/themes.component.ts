import { Component } from "@angular/core";
import { menuItems } from "../shared/data/menu-items";
import { HeaderComponent } from "../home/header/header.component";
import { TitleDisplayComponent } from "../reused-components/title-display/title-display.component";

@Component({
  selector: "app-themes",
  standalone: true,
  imports: [HeaderComponent, TitleDisplayComponent],
  templateUrl: "./themes.component.html",
  styleUrl: "./themes.component.scss",
})
export class ThemesComponent {
  componentTitle: string = menuItems[5].title;
}
