import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import emailsListReducer, * as fromEmailsList from './emails-list';
import emailReducer, * as fromEmail from './email';

export interface AppState {
    emails: fromEmailsList.EmailsListState;
    email: fromEmail.EmailState;
};

export default compose(combineReducers)({
    emails: emailsListReducer,
    email: emailReducer
});
