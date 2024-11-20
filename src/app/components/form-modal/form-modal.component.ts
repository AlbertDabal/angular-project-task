import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, input } from '@angular/core';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-form-modal',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Dodaj CUSTOM_ELEMENTS_SCHEMA
  imports: [FormComponent],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.css',
})
export class FormModalComponent {
  @Input({
    required: true,
  })
  product: any;

  @Input({
    required: true,
  })
  listProducts: any;
}
