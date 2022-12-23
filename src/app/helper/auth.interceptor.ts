import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenStorageService } from '../services/token-storage.service';
import { Observable } from 'rxjs';

const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

   constructor(private token: TokenStorageService) { }

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      let authReq = req;
      
      console.log("Auth----");
      console.log(this.token);
      
      const token = this.token.getToken();

      console.log("My Token -------");
      console.log(token);

      // if (token != null) {
      //    authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
      // }
      // else {
      //    alert('redirect me');
      // }
      return next.handle(authReq);
   }
}

export const authInterceptorProviders = [

   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];

