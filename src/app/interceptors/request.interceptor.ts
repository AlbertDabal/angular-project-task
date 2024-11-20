import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environment/enviroment';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Test Interceptor:', req.url);
  return next(req);

  // const modifiedReq = req.clone({
  //   setHeaders: {
  //     'x-test': environment.test.toString(),
  //   },
  // });

  // console.log('Intercepted Request:', modifiedReq);
};
