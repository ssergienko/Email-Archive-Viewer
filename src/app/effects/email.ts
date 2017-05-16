import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { AppState } from '../reducers';
import { EmailsActions } from '../actions';
import { EmailService } from '../services';

@Injectable()
export class EmailsEffects {
    constructor (
        private update$: Actions,
        private emailsActions: EmailsActions,
        private svc: EmailService,
    ) {}

    @Effect() loadEmails$ = this.update$
        .ofType(EmailsActions.LOAD_EMAILS)
        .switchMap(() => this.svc.getEmails())
        .map(emails => this.emailsActions.loadEmailsSuccess(emails));

    /*@Effect() getEmail$ = this.update$
        .ofType(HeroActions.GET_EMAIL)
        .map<string>(action => action.payload)
        .switchMap(id => this.svc.getHero(id))
        .map(hero => this.heroActions.getHeroSuccess(hero));*/
}
