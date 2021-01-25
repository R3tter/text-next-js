import { apiRequestRedux } from 'api-req-redux';
import { initializeStore } from 'src/store';

const getHeaders = state => [['Content-Type', 'application/json']];

export const apiRequest = (params, store) =>
  apiRequestRedux({
    store: () => store ?? initializeStore(),
    headers: getHeaders
  })(params);
