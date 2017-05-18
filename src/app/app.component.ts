import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './store/root.reducer';
import { EmailsActions } from './components/emails-container/store/emails.actions';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  showMonitor = (ENV === 'development' && !AOT &&
    ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
  );
  constructor(
    private store: Store<AppState>,
    private emailsActions: EmailsActions
  ) {}
  ngOnInit() {
    this.store.dispatch(this.emailsActions.loadEmails());
  }
}
