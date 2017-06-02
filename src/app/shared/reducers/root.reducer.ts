import { isDevMode } from '@angular/core';
import '@ngrx/core/add/operator/select';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

import * as router from '@ngrx/router-store';

import emailsListReducer, * as fromEmailsList
  from '../../components/emails-container/store/emails-list.reducer';

export interface AppState {
  router: router.RouterState;
  emails: fromEmailsList.EmailsListState;
};

export default compose(combineReducers)({
  router: router.routerReducer,
  emails: emailsListReducer
});

const reducers = {
  router: router.routerReducer,
  emails: emailsListReducer
};

export function createReducer(asyncReducers = {}): ActionReducer<any> {
  if (isDevMode()) {
    return compose(storeFreeze, combineReducers)(Object.assign(reducers, asyncReducers));
  }
  return combineReducers(Object.assign(reducers, asyncReducers));
}

export const rootReducer = createReducer();
