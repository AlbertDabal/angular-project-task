import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormModalComponent } from '../form-modal/form-modal.component';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { Product } from '../../../types/product';

@Component({
  selector: 'app-list-offer',
  standalone: true,
  imports: [FormModalComponent, NgxPermissionsModule],
  templateUrl: './list-offer.component.html',
  styleUrl: './list-offer.component.css',
})
export class ListOfferComponent {
  constructor(
    private router: Router,
    private http: HttpClient,
    private permissionsService: NgxPermissionsService
  ) {
    this.permissionsService.addPermission('CAN_VIEW_MODAL');
  }

  CORRECT_VALUE_LENGTH = 24;
  id = signal('');
  isError = signal(false);
  kinguinOfferData = signal<Product[]>([]);
  selectedItem = signal(null);

  hasPermission(permission: string): boolean {
    return this.permissionsService.getPermission(permission) !== undefined;
  }

  togglePermission(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.permissionsService.removePermission('CAN_VIEW_MODAL');
    } else {
      this.permissionsService.addPermission('CAN_VIEW_MODAL');
    }
  }

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
      this.kinguinOfferData.set([]);
    }
  }

  handleSelect(item: any) {
    this.selectedItem.set(item);
  }
}
