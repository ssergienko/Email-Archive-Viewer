import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Review } from '../review.model';

@Injectable()
export class ReviewActions {
  static HIGHLIGHT_BODY_TEXT_WHEN_SEARCH = 'Highlight test when user searches';
  highlightText(text): Action {
    return {
      type: ReviewActions.HIGHLIGHT_BODY_TEXT_WHEN_SEARCH,
      payload: text
    };
  }
}
