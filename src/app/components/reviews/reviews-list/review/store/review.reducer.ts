import { Action } from '@ngrx/store';

import { Review } from '../review.model';
import { ReviewActions } from './review.actions';

export type ReviewState = Review;

const initialState: ReviewState = {
    from: '',
    to: [],
    cc: [],
    bcc: [],
    subject: '',
    body: '',
    date: ''
};

export default function (state = initialState, action: Action): ReviewState {
  switch (action.type) {
    case ReviewActions.HIGHLIGHT_BODY_TEXT_WHEN_SEARCH: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
