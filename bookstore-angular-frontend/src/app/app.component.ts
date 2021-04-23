import { Component, VERSION } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Book } from './shared/book';

@Component({
  selector: 'bs-root',
  templateUrl: 'app.component.html',
  styleUrls: []
})
export class AppComponent  {

  constructor(private authService: AuthService) {}
  
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getLoginLabel() {
    return this.authService.isLoggedIn() ? "Logout" : "Login";
  }
}
