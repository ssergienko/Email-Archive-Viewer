import reducer, * as fromEmail from './store/email.reducer';
import { EmailsActions } from './store/emails.actions';

describe('Email Reducer', () => {
  let actions: EmailsActions;
  let state: fromEmail.EmailState;

  beforeEach(() => {
    actions = new EmailsActions();
    state = {
      from: 'Test',
      to: ['test 1'],
      cc: ['test 2'],
      bcc: ['test 3'],
      subject: 'test 4',
      body: 'test 5',
      date: 'test 6'
    };
  });

  it('uses an initial state when none is given', () => {
    let result = reducer(undefined, {type: 'SOME ACTION'});
    expect(result.to).toBe('test 1');
    expect(result.cc).toBe('test 2');
  });
});
