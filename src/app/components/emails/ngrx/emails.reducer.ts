import { Action } from '@ngrx/store';

import { EmailsActions } from './emails.actions';
import { Email } from './email.model';

export function emailsReducer(state = [], action: Action) {
  switch (action.type) {
    case EmailsActions.LOAD_EMAILS: {
      return {
        ...state
      };
    }
    case EmailsActions.LOAD_EMAILS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
