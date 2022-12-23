import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hospital Project';
  
  isLoggedIn = false;
  username: any;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
    }
  }


  logout(): void {
    this.tokenStorageService.signOut();
    window.location.href = '/';

  }

}
