import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { MainCardComponent } from "../../components/main-card/main-card.component";
import { SecondaryCardComponent } from "../../components/secondary-card/secondary-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, MainCardComponent, SecondaryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
