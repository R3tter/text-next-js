import App from 'next/app';
import i18next from 'i18next';

import { MyApp } from 'App';
import { preselectUserDevice } from 'helpers';
import '../index.css';

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  await i18next.changeLanguage(appContext.router.locale);
  return {
    pageProps: { ...appProps.pageProps, device: preselectUserDevice(appContext.ctx.req.headers) }
  };
};

export default MyApp;
