import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Email } from '../email.model';

@Injectable()
export class EmailsActions {
  static HIGHLIGHT_BODY_TEXT_WHEN_SEARCH = 'Highlight test when user searches';
  highlightText(text): Action {
    return {
      type: EmailsActions.HIGHLIGHT_BODY_TEXT_WHEN_SEARCH,
      payload: text
    };
  }
}
