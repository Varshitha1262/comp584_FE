import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { BookAppointmentService } from '../services/BookAppointment/book-appointment.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  appointmentForm: FormGroup;
  currentData: any;
  isLoggedIn = false;
  isLoginFailed = false;
  
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private thisService: BookAppointmentService,
    private tokenStorage: TokenStorageService
  ) {
    this.appointmentForm = this.formBuilder.group({
      doctor_id: [''],
      patient_id: [''],
      name: [''],
      email: [''],
      contact: [''],
      appointment_date: [''],
      appointment_time: [''],
    })
  }

  ngOnInit() : void{ 
    this.thisService.getDoctors().subscribe((data) => {

      this.currentData = data.data;
      this.currentData = this.currentData;
    },
      (err) => {
        console.log(err);
      }
    );
  }



  onSubmit(): any {

    this.thisService.Book(this.appointmentForm.value)
      .subscribe(() => {
        console.log('Appointment Booked Successfully!')

        this.ngZone.run(() => this.router.navigateByUrl('/my-appointments'))
      }, (err) => {
        console.log(err);
        // this.isLoginFailed = true;
      });
  }


}
