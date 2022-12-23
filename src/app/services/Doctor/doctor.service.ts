import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TokenStorageService } from '../token-storage.service';

import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  REST_API: string = 'http://127.0.0.1:8000/api';
  currentData:any;
  data1 : any;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };



  constructor(private httpClient: HttpClient,
    private router: Router,private token: TokenStorageService) { }

  // doctors
  getDoctors(): Observable<any> {
    let API_URL = `${this.REST_API}/view-doctors`;

    return this.httpClient.get(API_URL)
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
      errorMessage = `Error Code: ${error.status}\nMessage:"Cannot Get Data"`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
