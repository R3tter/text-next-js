import { handleActions } from 'redux-actions';
import { test } from 'App/actions';

const initialState = {
  initial: ''
};

export const Test = handleActions(
  {
    [test]: (state, { payload }) => payload
  },
  initialState
);
