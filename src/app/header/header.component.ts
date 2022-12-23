import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  isLoggedIn = false;
  username: any;

  currentData: any;
  user_type: any;


  constructor(private tokenStorageService: TokenStorageService,   private token: TokenStorageService) { }


  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    this.currentData = this.token.getUser();

    const user = this.token.getUser();
    this.user_type =  this.currentData.data.user.user_role;


    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
    }
  }

  
  

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.href = '/';

  }
}
