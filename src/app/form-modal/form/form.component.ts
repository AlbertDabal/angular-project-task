import { Component, Input, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Seller {
  id: number;
  name: string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Input({
    required: true,
  })
  product: any;

  @Input({
    required: true,
  })
  listProducts: any;

  userForm: FormGroup;

  listSeller = signal<Seller[]>([]);

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      productName: [''],
      popularityValue: [''],
      isPreorder: [''],
      type: [''],
      price: [''],
      currency: [''],
      seller: [''],
      activeStockNumber: [''],
    });
  }

  ngOnChanges() {
    console.log('product', this.product);

    const seller = this.listProducts.reduce((acc: any, currentValue: any) => {
      console.log('currentValue', currentValue);
      const { id, name } = currentValue.seller;

      acc.push({ id: id, name: name });
      return acc;
    }, []);

    console.log('seller', seller);

    this.listSeller.set(seller);

    this.userForm.patchValue({
      productName: this.product.productName,
      popularityValue: this.product.popularityValue,
      isPreorder: this.product.isPreorder,
      type: this.product.type,
      price: this.product.price.amount / 100,
      currency: this.product.price.currency,
      activeStockNumber: this.product.activeStockNumber,
    });
  }

  // Obsługa przesłania formularza
  submitForm(): void {
    if (this.userForm.valid) {
      console.log('Form data:', this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
