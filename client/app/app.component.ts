import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent {

  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {
  }

  isAuth(): boolean {
    return this.authService.getAuthenticated();
  }

  onLogOut() {
    this.authService.setAuthenticated(false);
    this.authService.logout();
  }
}