import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewAppointmentService } from '../services/ViewAppointment/view-appointment.service';
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent  implements OnInit {

  currentData: any;
  user_type: any;
  data1: any;

  constructor(

    private router: Router,private ngZone: NgZone,
    private checkService: ViewAppointmentService,
    private token: TokenStorageService
  ) { 


    this.data1 = ({
      doctor_id: [''],
    })
  }

  ngOnInit(): void {

    // this.currentData = this.token.getUser();


    // this.user_type =  this.currentData.user_type;

    this.checkService.appointments(this.data1).subscribe((data) => {
      this.currentData = data;
      this.currentData = this.currentData.data;

      console.log(this.currentData);

    },
      (err) => {
        console.log(err);
      }
    );
  }


  update_status(id:number,status:String){
    this.checkService.update_status(this.data1,id,status)
    .subscribe(() => {
      console.log('Status Updated Successfully!')
      window.location.reload();
      this.ngZone.run(() => this.router.navigateByUrl('/view-appointments'))
    }, (err) => {
      console.log(err);
    });
  }

}
