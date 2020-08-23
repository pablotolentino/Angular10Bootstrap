import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req;
    
    // const token: string = localStorage.getItem('token');
    // if (token) {
    //   request = req.clone({
    //     setHeaders: {
    //       authorization: `Bearer ${ token }`
    //     }
    //   });
    // }

    // const nextReq = request.clone(
    //   {
    //     headers: request.headers.set('X-API-KEY', environment.API_KEY)
    //   }
    // );

    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      return event;
    }),
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }
}