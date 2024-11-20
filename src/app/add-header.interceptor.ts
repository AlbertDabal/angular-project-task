import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment';

export const addHeaderInterceptor: HttpInterceptorFn = (req, next) => {
  const value: string = environment.test.toString();

  const modifiedReq = req.clone({
    headers: req.headers.append('X-test', value),
  });

  return next(modifiedReq);
};
