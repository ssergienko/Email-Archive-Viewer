import { Component, Input } from '@angular/core';
import { Review } from './review.model';

@Component({
  selector: 'review-component',
  template: `
    <div class="reviews-element">
      <div class="from">
        <strong>From: </strong>{{reviewdata.from}}
      </div>
      <div class="subject">
        <strong>Subject: </strong> {{reviewdata.subject}}
      </div>
      <div class="date">
        <strong>Received at: </strong> {{reviewdata.date}}
      </div>
      <div class="body">{{reviewdata.body}}</div>
    </div>
  `
})

export class ReviewComponent {
  @Input() reviewdata: Review;
}
