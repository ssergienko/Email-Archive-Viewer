import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { EmailsActions } from './ngrx/emails.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../root.reducer';

@Component({
  selector: 'emails',
  template: `
    <ul><li *ngFor="let email of emails">{{email.subject}}</li></ul>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./emails.component.css']
})

export class EmailsComponent implements OnInit {
  private emails: any;
  constructor (
    private emailsActions: EmailsActions,
    private store: Store<AppState>
  ) {
    store.select('emails').subscribe( (state)=> {
      console.log(state);
      if (Object.prototype.toString.call(state) === '[object Array]') {
        this.emails = state;
      }
    });
  }
  public ngOnInit() {
    this.store.dispatch(this.emailsActions.loadEmails());
  }
}
