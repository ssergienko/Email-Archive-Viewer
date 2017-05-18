import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import { Email } from '../email/email.model';
import { EmailsActions } from './emails.actions';

export type EmailsListState = Email[];

const initialState: EmailsListState = [];

export default function (state = initialState, action: Action): EmailsListState {
  switch (action.type) {
    case EmailsActions.LOAD_EMAILS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
