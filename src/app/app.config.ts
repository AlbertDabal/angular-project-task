import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NgxPermissionsModule } from 'ngx-permissions';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { addHeaderInterceptor } from './add-header.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(NgxPermissionsModule.forRoot()),
    provideHttpClient(withInterceptors([addHeaderInterceptor])),
  ],
};
