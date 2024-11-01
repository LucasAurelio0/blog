import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-secondary-card',
  standalone: true,
  imports: [RouterModule],
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
  @Input()
  id:string = '0'
}
