import { EmailsActions } from './components/emails/ngrx/emails.actions';
import { EmailsService } from './components/emails/emails.service';

export const APP_PROVIDERS = [
  EmailsActions,
  EmailsService
];
