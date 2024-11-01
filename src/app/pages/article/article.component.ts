import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input()
  photoUrl:string = 'https://archive.org/download/placeholder-image/placeholder-image.jpg'
  @Input()
  articleTitle:string = ''
  @Input()
  articleDescription:string = ''

  constructor(private route: ActivatedRoute) {
  }
}
