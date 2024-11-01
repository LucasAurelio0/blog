import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-card',
  standalone: true,
  imports: [],
  templateUrl: './secondary-card.component.html',
  styleUrl: './secondary-card.component.css'
})
export class SecondaryCardComponent {
  @Input()
  photoUrl: string = 'https://archive.org/download/placeholder-image/placeholder-image.jpg'
  @Input()
  cardTitle: string = ''
  @Input()
  cardInfo: string = ''
}
