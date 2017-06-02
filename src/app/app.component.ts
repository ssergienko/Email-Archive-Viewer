import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './shared/reducers/root.reducer';
import { ReviewsActions } from './components/reviews/store/reviews.actions';

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
    private reviewsActions: ReviewsActions
  ) {}
  ngOnInit() {
    this.store.dispatch(this.reviewsActions.loadReviews());
  }
}
