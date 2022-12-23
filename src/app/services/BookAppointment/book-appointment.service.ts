import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BookAppointment } from '../BookAppointment';
import { Router } from "@angular/router";
import { TokenStorageService } from '../token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class BookAppointmentService {

  REST_API: string = 'http://127.0.0.1:8000/api';

  currentData: any;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };


  constructor(private httpClient: HttpClient,
    private router: Router,private token: TokenStorageService) { }

  // Register
  Book(data: BookAppointment): Observable<any> {
    let API_URL = `${this.REST_API}/book-appointment`;

    this.currentData = this.token.getUser();

    this.currentData = this.currentData.data;

    data.patient_id = this.currentData.user.patient.patient_id;

    return this.httpClient.post(API_URL,data)
      .pipe(
        catchError(this.handleError)
      )
  }


  getDoctors(): Observable<any> {

    let API_URL = `${this.REST_API}/view-doctors`;


    this.currentData = this.token.getUser();
    this.currentData = this.currentData.data;


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
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
