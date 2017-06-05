import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './shared/reducers/root.reducer';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  showMonitor = (
    ENV === 'development' &&
    !AOT &&
    ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
  );
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    console.log('app.component init');
  }
}
