import { createSelector } from 'reselect';

const home = store => store.Home;
export const getData = createSelector(home, data => data);
