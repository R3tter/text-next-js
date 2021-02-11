import { initializeStore } from 'src/store';
import { wrappedItems } from 'constants';

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

export const wrapClient = type => {
  switch (type) {
    case wrappedItems.window:
      return typeof window !== 'undefined' ? window : null;
    case wrappedItems.document:
      return typeof document !== 'undefined' ? document : null;
  }
};

export const preselectUserDevice = headers => {
  const info = headers ? headers['user-agent'] : navigator.userAgent;
  return {
    info,
    mobile: !!info?.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
  };
};
