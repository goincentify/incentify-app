import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorage } from '@app/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from './service/alert.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private alertService: AlertService, private token: TokenStorage) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | HttpEvent<any>> {
    let authReq = req;

    if (this.token.getToken() != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken()) });
    } else {
      this.token.signOut();
    }

    return next.handle(authReq).pipe(catchError(err => 
      {
        if (err instanceof HttpErrorResponse) { this.alertService.error("Unable to authenticate."); console.log('401 Unauthorized on :: ' + req.url); this.token.signOut(); }

        if (err.status === 401) {
          this.token.signOut();
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      }
    ));
  }

}