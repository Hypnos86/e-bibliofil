import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-display',
  standalone: true,
  imports: [],
  templateUrl: './title-display.component.html',
  styleUrl: './title-display.component.scss'
})
export class TitleDisplayComponent {
@Input() title?: string;
}
