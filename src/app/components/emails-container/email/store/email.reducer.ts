import { Action } from '@ngrx/store';

import { Email } from '../email.model';
import { EmailsActions } from './email.actions';

export type EmailState = Email;

const initialState: EmailState = {
    from: '',
    to: [],
    cc: [],
    bcc: [],
    subject: '',
    body: '',
    date: ''
};

export default function (state = initialState, action: Action): EmailState {
  switch (action.type) {
    case EmailsActions.HIGHLIGHT_BODY_TEXT_WHEN_SEARCH: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
