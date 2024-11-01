import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css'
})
export class MainCardComponent {
  @Input()
  photoUrl:string = 'https://archive.org/download/placeholder-image/placeholder-image.jpg'
  @Input()
  cardTitle:string = ''
  @Input()
  cardDescription:string = ''
  @Input()
  cardInfo:string = ''
  @Input()
  id:string = '0'
}
