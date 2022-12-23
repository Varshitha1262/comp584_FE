import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../services/Doctor/doctor.service';
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  currentData: any;
  user_type: any;

  constructor(

    private router: Router,private ngZone: NgZone,
    private checkService: DoctorService,
    private token: TokenStorageService
  ) { 

  }

  ngOnInit(): void {

    this.checkService.getDoctors().subscribe((data) => {

      this.currentData = data.data;
      this.currentData = this.currentData;

      
    },
      (err) => {
        console.log(err);
      }
    );
  }


}
