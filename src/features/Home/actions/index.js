import { createAction } from 'redux-actions';
import { apiRequest } from 'core/apiRequest';

export const setData = createAction('home/setData');

export const getTestData = store => async dispatch =>
  apiRequest(
    {
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      method: 'GET',
      onSuccess: data => dispatch(setData(data))
    },
    store
  );
