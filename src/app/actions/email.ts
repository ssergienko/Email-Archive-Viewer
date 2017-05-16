import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import { Email } from '../models';

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

    /*static GET_HERO = '[Hero] Get Hero';
    getHero(id): Action {
        return {
            type: HeroActions.GET_HERO,
            payload: id
        };
    }

    static GET_HERO_SUCCESS = '[Hero] Get Hero Success';
    getHeroSuccess(hero): Action {
        return {
            type: HeroActions.GET_HERO_SUCCESS,
            payload: hero
        };
    }*/

}
