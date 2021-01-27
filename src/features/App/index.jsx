import i18next from 'i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import dynamic from 'next/dynamic';

const Notifications = dynamic(() => import('react-notify-library').then(mod => mod.Notifications), { ssr: false });

import 'src/i18n';
import { useStore, setInitialLang } from 'hooks';

const useSetInitialLang = setInitialLang(i18next);

export const MyApp = ({ Component, pageProps }) => {
  const { locale } = useRouter();
  useSetInitialLang(locale);
  useEffect(() => {
    // eslint-disable-next-line
    console.log(`%c current version is: ${VERSION}`, 'color: cornflowerblue; font-size: 13px;');
  }, []);
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Notifications />
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
};
