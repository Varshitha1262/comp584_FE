import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewAllAppointmentService } from '../services/ViewAllAppointment/view-all-appointment.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent {

  
  currentData: any;
  user_type: any;
  data1: any;

  constructor(

    private router: Router,private ngZone: NgZone,
    private checkService: ViewAllAppointmentService,
    private token: TokenStorageService
  ) { 


    this.data1 = ({
      doctor_id: [''],
    })
  }

  ngOnInit(): void {

    // this.currentData = this.token.getUser();


    // this.user_type =  this.currentData.user_type;

    this.checkService.appointments().subscribe((data) => {
      this.currentData = data;
      this.currentData = this.currentData.data;

      console.log(this.currentData);

    },
      (err) => {
        console.log(err);
      }
    );
  }
}
