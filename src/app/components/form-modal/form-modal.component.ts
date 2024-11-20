import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Product } from '../../../types/product';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-form-modal',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [FormComponent],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.css',
})
export class FormModalComponent {
  @Input({
    required: true,
  })
  product!: Product;

  @Input({
    required: true,
  })
  listProducts!: Product[];
}
