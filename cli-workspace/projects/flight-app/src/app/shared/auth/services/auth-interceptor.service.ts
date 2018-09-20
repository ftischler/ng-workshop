import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { OAuthStorage } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router: Router, private oAuthStorage: OAuthStorage) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith('http://www.angular.at')) {
      const headers = req.headers.set('Authorization', `Bearer ${this.oAuthStorage.getItem('access_token')}`);
      req = req.clone({ headers });
    }

    return next.handle(req).pipe(
      catchError(err => this.handleError(err))
    );
  }

  private handleError(httpError: HttpErrorResponse): Observable<never> {
    if (httpError.status == 401 || httpError.status == 403) {
      this.router.navigate(['/home', {needsLogin: true}]);
    }
    return throwError(httpError);
  }
}
