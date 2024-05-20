import { Component } from '@angular/core';
import { menuItems } from '../shared/data/menu-items';
import { HeaderComponent } from '../home/header/header.component';
import { TitleDisplayComponent } from '../reused-components/title-display/title-display.component';

@Component({
  selector: 'app-kinds',
  standalone: true,
  imports: [HeaderComponent, TitleDisplayComponent],
  templateUrl: './kinds.component.html',
  styleUrl: './kinds.component.scss'
})
export class KindsComponent {

  componentTitle: string = menuItems[4].title;

}
