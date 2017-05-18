import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import { Email } from '../email.model';

@Injectable()
export class EmailsActions {
  static LOAD_EMAILS = 'Load emails';
  loadEmails(): Action {
    return {
      type: EmailsActions.LOAD_EMAILS
    };
  }

  static LOAD_EMAILS_SUCCESS = 'Load emails success';
  loadEmailsSuccess(emails): Action {
    return {
      type: EmailsActions.LOAD_EMAILS_SUCCESS,
      payload: emails
    };
  }
}
