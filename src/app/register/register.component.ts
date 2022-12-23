import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/Register/register.service';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {

  registerForm: FormGroup;
  currentData: any;
  
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private registerService: RegisterService,
  ) {
    this.registerForm = this.formBuilder.group({
      name: [''],
      address: [''],
      gender: [''],
      email: [''],
      password: [''],
      contact: [''],
      health_history: [''],
      age: [''],
      user_role: ['patient'],
    })
  }

  ngOnInit() { }

  onSubmit(): any {

    this.registerService.AddUser(this.registerForm.value,this.registerForm.value)
      .subscribe(() => {
        console.log('Registered successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/login'))
      }, (err) => {
        console.log(err);
      });
  }



}
