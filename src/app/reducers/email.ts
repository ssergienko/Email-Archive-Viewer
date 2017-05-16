import {Action} from '@ngrx/store';

import { Email } from '../models';
import { EmailsActions } from '../actions';

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
    case EmailsActions.LOAD_EMAILS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
