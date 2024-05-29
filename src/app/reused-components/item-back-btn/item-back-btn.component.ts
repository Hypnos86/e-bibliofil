import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-back-btn',
  standalone: true,
  imports: [],
  templateUrl: './item-back-btn.component.html',
  styleUrl: './item-back-btn.component.scss'
})
export class ItemBackBtnComponent {
@Input() componentPath?:string
}
