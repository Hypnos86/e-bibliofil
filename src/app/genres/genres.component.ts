import { Component } from '@angular/core';
import { menuItems } from '../shared/data/menu-items';
import { HeaderComponent } from '../home/header/header.component';
import { TitleDisplayComponent } from '../reused-components/title-display/title-display.component';

@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [HeaderComponent, TitleDisplayComponent],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss'
})
export class GenresComponent {

  componentTitle: string = menuItems[3].title;

}
