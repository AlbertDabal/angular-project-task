import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormModalComponent } from '../form-modal/form-modal.component';

@Component({
  selector: 'app-list-offer',
  standalone: true,
  imports: [HttpClientModule, FormModalComponent],
  templateUrl: './list-offer.component.html',
  styleUrl: './list-offer.component.css',
})
export class ListOfferComponent {
  constructor(private router: Router, private http: HttpClient) {}

  CORRECT_VALUE_LENGTH = 24;
  id = signal('');
  isError = signal(false);
  kinguinOfferData = signal<any>([]);
  selectedItem = signal(null);

  fetchData() {
    this.http
      .get(
        `https://gateway.kinguin.net/offer/api/v2/offers/findActiveOffers/${this.id()}`
      )
      .subscribe(
        (res: any) => {
          console.log('Dane pobrane:', res);
          this.kinguinOfferData.set(res._embedded.kinguinOffer);
        },
        (error) => {
          console.error('Błąd:', error);
        }
      );
  }

  addQueryParam() {
    this.router.navigate([], {
      queryParams: { id: this.id() },
    });
  }

  handleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.id.set(inputElement.value);
    }

    if (this.id().length === this.CORRECT_VALUE_LENGTH) {
      this.isError.set(false);
      this.addQueryParam();
      this.fetchData();
    } else {
      this.isError.set(true);
      this.kinguinOfferData.set(null);
    }
  }

  handleSelect(item: any) {
    this.selectedItem.set(item);
  }
}
