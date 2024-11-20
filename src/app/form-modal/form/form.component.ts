import { Component, Input, input, signal } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      productName: [''],
      popularityValue: ['', [Validators.required, Validators.email]],
      isPreorder: [''],
      type: ['', Validators.pattern('^[0-9]{9,15}$')],
      price: ['', [Validators.min(0), Validators.max(150)]],
      currency: [''],
    });
  }

  ngOnChanges() {
    console.log('product', this.product);

    this.userForm.patchValue({
      productName: this.product.productName,
      popularityValue: this.product.popularityValue,
      isPreorder: this.product.isPreorder,
      type: this.product.type,
      price: this.product.price,
      currency: this.product.currency,
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
