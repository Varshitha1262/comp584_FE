import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/Login/login.service';
import { TokenStorageService } from '../services/token-storage.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  user_type: any;
  currentData: any;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private loginService: LoginService,
    private tokenStorage: TokenStorageService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }
  onSubmit(): any {
    this.loginService.Login(this.loginForm.value)
      .subscribe((data) => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.currentData = this.tokenStorage.getUser();
        const user = this.tokenStorage.getUser();
        this.user_type =  this.currentData.data.user.user_role;

        console.log('Login successfully!')
        if(this.user_type === 'patient'){
          this.reloadPage();
        } if(this.user_type === 'admin'){
          this.reloadPage2();
        }if(this.user_type === 'doctor'){
          this.reloadPage1();
        }
      },
        (err) => {
          console.log(err);
          this.isLoginFailed = true;
        }
      );
  }


  reloadPage(): void {
    window.location.href = '/book-appointment';
  }
  
  reloadPage1(): void {
    window.location.href = '/view-appointments';

  }
  reloadPage2(): void {
    window.location.href = '/view-all-appointments';

  }
}
