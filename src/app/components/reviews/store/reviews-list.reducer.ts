import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Review } from '../reviews-list/review/review.model';
import { ReviewsActions } from './reviews.actions';

export type ReviewsListState = Review[];

const initialState: ReviewsListState = [];

export default function (state = initialState, action: Action): ReviewsListState {
  switch (action.type) {
    case ReviewsActions.LOAD_REVIEWS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
