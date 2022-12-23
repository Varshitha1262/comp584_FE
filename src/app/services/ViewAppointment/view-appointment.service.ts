import { Injectable } from '@angular/core';
import { BookAppointment } from '../BookAppointment';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TokenStorageService } from '../token-storage.service';

import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ViewAppointmentService {

  
  REST_API: string = 'http://127.0.0.1:8000/api';
  currentData:any;
  data1 : any;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };



  constructor(private httpClient: HttpClient,
    private router: Router,private token: TokenStorageService) { }

  // AddlaundryMachine
  appointments(data: BookAppointment): Observable<any> {
    let API_URL = `${this.REST_API}/view-doctor-appointments`;

    this.currentData = this.token.getUser();
    this.currentData = this.currentData.data;

    const uuser_id = this.currentData.user.doctor.doctor_id;

    data.doctor_id = uuser_id;

    return this.httpClient.post(API_URL,data)
      .pipe(
        catchError(this.handleError)
      )
  }


  update_status(data: BookAppointment, pass_id:number, status:String): Observable<any> {

    let API_URL = `${this.REST_API}/update-appointment-status`;


    data.appointment_id = pass_id;
    data.status = status;

    // const body  = "?id="+id+"&status="+status1;

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
      errorMessage = `Error Code: ${error.status}\nMessage:"Cannot Get Data"`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
