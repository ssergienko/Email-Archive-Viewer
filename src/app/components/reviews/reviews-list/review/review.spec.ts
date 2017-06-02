// @todo: make it working

import reducer, * as fromReview from './store/review.reducer';
import { ReviewActions } from './store/review.actions';

describe('Review Reducer', () => {
  let actions: ReviewActions;
  let state: fromReview.ReviewState;

  beforeEach(() => {
    actions = new ReviewActions();
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
