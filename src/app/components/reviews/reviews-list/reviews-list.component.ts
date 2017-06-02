import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsList {
  @Input() reviews;
  @Input() selectedReview;
  @Input() page;
  @Input() filterText;
  @Input() order;
  @Output() onSelect = new EventEmitter();
  @Output() onDelete = new EventEmitter();
}
