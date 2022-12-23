import { Injectable } from '@angular/core';
import { User } from '../User';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  REST_API: string = 'http://127.0.0.1:8000/api';
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  // Login
  Login(data: User): Observable<any> {
    let API_URL = `${this.REST_API}/login`;
    const uemail = data.email;
    const upassword = data.password;
    const body  = "?email="+uemail+"&password="+upassword;
    return this.httpClient.post(API_URL,data)
      .pipe(
        catchError(this.handleError)
      )
  }
  
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage:"Email or Password is Incorrect"`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
