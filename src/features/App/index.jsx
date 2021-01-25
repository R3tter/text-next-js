import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { useStore } from 'hooks';

export const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // eslint-disable-next-line
    console.log(`%c current version is: ${URL}`, 'color: cornflowerblue; font-size: 13px;');
  }, []);
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
};
