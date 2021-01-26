import { initializeStore } from 'src/store';

export const serverDispatch = async (action, initialData) => {
  const store = initializeStore(initialData);
  await store.dispatch(action(store));
  return store.getState();
};

export const generateEventObj = (name, value) => ({
  target: {
    name,
    value
  }
});
