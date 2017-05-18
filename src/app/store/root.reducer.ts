import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import emailsListReducer, * as fromEmailsList from '../components/emails-container/store/emails-list.reducer';
import emailReducer, * as fromEmail from '../components/emails-container/store/email.reducer';

export interface AppState {
    emails: fromEmailsList.EmailsListState;
    email: fromEmail.EmailState;
};

export default compose(combineReducers)({
    emails: emailsListReducer,
    email: emailReducer
});
