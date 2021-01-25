import { handleActions } from 'redux-actions';
import { setData } from 'Home/actions';

const initialState = {
  userId: null,
  id: null,
  title: '',
  completed: false
};

export const Home = handleActions(
  {
    [setData]: (state, { payload }) => payload
  },
  initialState
);
