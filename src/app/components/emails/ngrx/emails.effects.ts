import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { EmailsActions } from './emails.actions';
import { EmailsService } from '../emails.service';

@Injectable()

export class EmailsEffects {
  constructor(
    private actions$: Actions,
    private emailsService: EmailsService,
    private emailsActions: EmailsActions
  ) { }

  @Effect() loadEmails$ = this.actions$
    .ofType(EmailsActions.LOAD_EMAILS)
    .map(action => action.payload)
    .switchMap(() => this.emailsService.getEmails()
      .mergeMap((res: any) => Observable.of(
        this.emailsActions.loadEmailsSuccess(res)
        )
      )
      .catch((err) => Observable.of(
        this.emailsActions.loadEmailsFail(err)
      ))
    );
}
