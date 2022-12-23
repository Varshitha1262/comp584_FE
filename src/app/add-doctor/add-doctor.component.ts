import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AddDoctorService } from '../services/AddDoctor/add-doctor.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  registerForm: FormGroup;
  currentData: any;
  
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private registerService: AddDoctorService,
  ) {
    this.registerForm = this.formBuilder.group({
      full_name: [''],
      email: [''],
      password: [''],
      contact: [''],
      specialization: [''],
      qualification: [''],
      hospital_id: ['1'],
      user_role: ['doctor'],
    })
  }

  ngOnInit() { }

  onSubmit(): any {

    this.registerService.AddUser(this.registerForm.value,this.registerForm.value)
      .subscribe(() => {
        console.log('Registered successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/doctors'))
      }, (err) => {
        console.log(err);
      });
  }

}
