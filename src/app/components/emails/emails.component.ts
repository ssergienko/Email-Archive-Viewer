import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../reducers';
import { EmailsActions } from '../../actions';
import { EmailsList } from './emails-list/emails-list.component';
//import { EmailDetail } from './emails-details/hero-detail.component';

@Component({
  selector: 'emails',
  template: `
    <emails-list
        [emails]="emails | async"
        [selectedEmail]="selectedEmails"
        (onSelect)="select($event)"
    ></emails-list>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./emails.component.css'],
  providers: [ EmailsList ]
})

export class Emails {
  private emails: Observable<any>;
  selectedEmail;
  constructor (
    private emailsActions: EmailsActions,
    private store: Store<AppState>
  ) {
    this.emails = store.select('emails');
  }
  select(email) {
      console.log(email);
      this.selectedEmail = email;
  }
}
