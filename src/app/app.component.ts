import { Component } from '@angular/core';
import { ListOfferComponent } from './components/list-offer/list-offer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ListOfferComponent],
})
export class AppComponent {
  title = 'angular-project';
}
