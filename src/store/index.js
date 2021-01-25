import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Cached } from 'App/reducers/cached';
import { Home } from 'Home/reducers';
import { LOCAL_STORAGE_NAME } from 'constants/index.js';

import { loadState, saveState, clearState } from './localStorage';

let store;

const mergedReducers = {
  Cached,
  Home
};

// update localStorage
const cachedMiddleware = store => next => action => {
  switch (action.type) {
    case 'SET_CACHED_DATA':
      next(action);
      saveState(store.getState());
      break;
    default:
      next(action);
  }
};

const appReducer = combineReducers(mergedReducers);

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    // eslint-disable-next-line
    state = action.payload;
    // clear localStorage.
    clearState();
  }
  return appReducer(state, action);
};

const cached = loadState(LOCAL_STORAGE_NAME);

const initStore = (preloadedState = {}) =>
  createStore(
    rootReducer,
    {
      ...preloadedState,
      ...cached
    },
    composeWithDevTools(applyMiddleware(thunk, cachedMiddleware))
  );

export const initializeStore = preloadedState => {
  let localStore = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    localStore = initStore({
      ...store.getState(),
      ...preloadedState
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return localStore;
  if (!store) store = localStore;

  return localStore;
};
