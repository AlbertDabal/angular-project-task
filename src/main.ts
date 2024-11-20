/// <reference types="@angular/localize" />

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AppComponent } from './app/app.component';
import { requestInterceptor } from './app/interceptors/request.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([requestInterceptor])),
    importProvidersFrom(NgxPermissionsModule.forRoot()),
  ],
}).catch((err) => console.error(err));
