import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Review } from '../reviews-list/review/review.model';

@Injectable()
export class ReviewsActions {
  static LOAD_REVIEWS = 'Load reviews';
  loadReviews(): Action {
    return {
      type: ReviewsActions.LOAD_REVIEWS
    };
  }

  static LOAD_REVIEWS_SUCCESS = 'Load reviews success';
  loadReviewsSuccess(reviews): Action {
    return {
      type: ReviewsActions.LOAD_REVIEWS_SUCCESS,
      payload: reviews
    };
  }
}
