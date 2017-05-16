import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';

import { Email } from './email.model';

@Injectable()

export class EmailsActions {
  static LOAD_EMAILS = 'Load emails';
  loadEmails(): Action {
    console.log(EmailsActions.LOAD_EMAILS);
    return {
        type: EmailsActions.LOAD_EMAILS
    };
  }
  static LOAD_EMAILS_FAIL = 'Cant load emails';
  loadEmailsFail(err: Error): Action {
    console.log(EmailsActions.LOAD_EMAILS_FAIL);
    return {
      type: EmailsActions.LOAD_EMAILS_FAIL,
      payload: err
    };
  }
  static LOAD_EMAILS_SUCCESS = 'Success';
  loadEmailsSuccess(res: Response): Action {
    console.log(EmailsActions.LOAD_EMAILS_SUCCESS);
    return {
      type: EmailsActions.LOAD_EMAILS_SUCCESS,
      payload: res
    };
  }
}
