import { HeaderComponent } from './../home/header/header.component';
import { Component } from "@angular/core";
import { TitleDisplayComponent } from "../reused-components/title-display/title-display.component";
import { menuItems } from "../shared/data/menu-items";

@Component({
  selector: "app-epochs",
  standalone: true,
  imports: [HeaderComponent,TitleDisplayComponent],
  templateUrl: "./epochs.component.html",
  styleUrl: "./epochs.component.scss",
})
export class EpochsComponent {
  componentTitle: string = menuItems[2].title;
}
