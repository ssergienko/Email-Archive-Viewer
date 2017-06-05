import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl } from '@angular/forms';

import { AppState } from '../../shared/reducers/root.reducer';
import { ReviewsActions } from './store/reviews.actions';
import { ReviewsList } from './reviews-list/reviews-list.component';
import { Review } from './reviews-list/review/review.model';

@Component({
  selector: 'reviews',
  template: `
    <div class="container-fluid row">
      <div class="col-lg-3 col-md-3 hidden-sm hidden-xs"></div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <pagination-controls
          (pageChange)="pageChanged($event)"
          previousLabel=""
          nextLabel=""></pagination-controls>
        <input class="form-control search-by-subject" type="text"
          [value]="filterText"
          [placeholder]="filterPlaceholder"
          [formControl]="filterInput" />
        <!-- move filters to component and make friends with store -->
        <div class="filters">
          <a href="#" (click)="setOrderField($event, 'from')">Order by Name From</a> /
          <a href="#" (click)="setOrderField($event, 'date')">Order by Date</a>
        </div>
        <reviews-list
          [reviews]="reviews | async"
          [selectedReview]="selectedReview"
          (onSelect)="select($event)"
          [page]="page"
          [filterText]="filterText"
          [order]="order"
        ></reviews-list>
      </div>
      <div class="col-lg-3 col-md-3 hidden-sm hidden-xs"></div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./reviews.component.css'],
  providers: [ ReviewsList ]
})

export class ReviewsContainer implements OnInit {
  public page: number = 5;
  public filterText: string;
  public filterPlaceholder: string;
  public filterInput = new FormControl();
  public reviews: Observable<any>;
  public selectedReview: Review;
  public order: string = 'date';
  constructor (
    private reviewsActions: ReviewsActions,
    private store: Store<AppState>
  ) {
    this.reviews = store.select('reviews');
  }
  ngOnInit() {
    this.filterText = '';
    this.filterPlaceholder = 'Search in subject...';
    this.filterInput
      .valueChanges
      .debounceTime(200)
      .subscribe(term => {
        this.filterText = term;
      });
    this.store.dispatch(this.reviewsActions.loadReviews());
  }
  select(review) {
    console.log(review);
    this.selectedReview = review;
  }
  pageChanged(page) {
    this.page = page;
  }
  setOrderField(event, field) {
    event.preventDefault();
    this.order = field;
  }
}
