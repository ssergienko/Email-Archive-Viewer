import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { ReviewsActions } from './reviews.actions';
import { ReviewService } from '../reviews.service';

@Injectable()
export class ReviewsEffects {
    constructor (
        private update$: Actions,
        private reviewsActions: ReviewsActions,
        private svc: ReviewService,
    ) {}

    @Effect() loadReviews$ = this.update$
        .ofType(ReviewsActions.LOAD_REVIEWS)
        .switchMap(() => this.svc.getReviews())
        .map(reviews => this.reviewsActions.loadReviewsSuccess(reviews));

    /*@Effect() getReview$ = this.update$
        .ofType(HeroActions.GET_REVIEW)
        .map<string>(action => action.payload)
        .switchMap(id => this.svc.getHero(id))
        .map(hero => this.heroActions.getHeroSuccess(hero));*/
}
