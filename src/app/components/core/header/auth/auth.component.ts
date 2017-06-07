import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'auth',
  template: `
    <div class="auth">
      <button
        class="btn btn-primary btn-margin"
        *ngIf="!auth.isAuthenticated()"
        (click)="auth.login()">
          Log In
      </button>
      <button
        class="btn btn-primary btn-margin"
        *ngIf="auth.isAuthenticated()"
        (click)="auth.logout()">
          Log Out
      </button>
    </div>
  `,
  styleUrls: [
    './auth.component.css'
  ]
})
export class AuthComponent implements OnInit {
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
  public ngOnInit() {
    console.log('Auth component ngOnInit');
  }
}
