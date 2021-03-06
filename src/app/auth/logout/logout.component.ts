import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'logout',
  template: `
    <p>
      logout works!
    </p>
  `,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private  authService:  AuthService) { }

  ngOnInit() {
    this.authService.logout();
  }

}
