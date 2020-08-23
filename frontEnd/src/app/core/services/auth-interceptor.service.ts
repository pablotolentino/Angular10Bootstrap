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
    const nextReq = req.clone(
    //   {
    //   headers: req.headers.set('X-API-KEY', environment.API_KEY)
    // }
    );
    return next.handle(nextReq).pipe(map((event: HttpEvent<any>) => {
      return event;
    }),
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }
}