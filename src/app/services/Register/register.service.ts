import { Injectable } from '@angular/core';
import { User } from '../User';
import { Patient } from '../Patient';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Router } from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  REST_API: string = 'http://127.0.0.1:8000/api';

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }),
  };


  constructor(private httpClient: HttpClient,
    private router: Router) { }

  // Register
  AddUser(data: User, data2: Patient): Observable<any> {

    let API_URL = `${this.REST_API}/register`;

    const ufirst_name = data2.name;
    const uaddress = data2.address;
    const ugender = data2.gender;
    const uemail = data.email;
    const ucontact = data2.contact;
    const upassword = data.password;
    const uuser_type = data.user_role;
    const uage = data2.age;
    const uhealth_history = data2.health_history;

    const body  = "?name="+ufirst_name+"&address="+uaddress+"&email="+uemail+"&contact="+ucontact+"&password="+upassword+"&user_role="+uuser_type+"&gender="+ugender+"&age="+uage+"&health_history="+uhealth_history;

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
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
