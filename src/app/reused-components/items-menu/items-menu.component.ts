import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items-menu',
  standalone: true,
  imports: [],
  templateUrl: './items-menu.component.html',
  styleUrl: './items-menu.component.scss'
})
export class ItemsMenuComponent {
  @Input() title?: string;
  @Input() url?: string;
}
