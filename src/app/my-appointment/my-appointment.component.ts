import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyAppointmentService } from '../services/MyAppointment/my-appointment.service';
import { TokenStorageService } from '../services/token-storage.service';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-my-appointment',
  templateUrl: './my-appointment.component.html',
  styleUrls: ['./my-appointment.component.css']
})
export class MyAppointmentComponent  implements OnInit{

  currentData: any;
  user_type: any;
  data1: any;

  constructor(

    private router: Router,private ngZone: NgZone,
    private checkService: MyAppointmentService,
    private token: TokenStorageService
  ) { 


    this.data1 = ({
      patient_id: [''],
    })
  }

  ngOnInit(): void {

    this.currentData = this.token.getUser();


    this.user_type =  this.currentData.user_type;

    this.checkService.appointments(this.data1).subscribe((data) => {
      this.currentData = data;
      this.currentData = this.currentData.data;

    },
      (err) => {
        console.log(err);
      }
    );
  }


  update_status(id:number,status:String){
    this.checkService.update_status(this.data1,id,status)
    .subscribe(() => {
      console.log('Cancelled successfully!')
      window.location.reload();
      this.ngZone.run(() => this.router.navigateByUrl('/my-appointments'))
    }, (err) => {
      console.log(err);
    });
  }

}
