import App from 'next/app';
import i18next from 'i18next';

import { MyApp } from 'App';

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  await i18next.changeLanguage(appContext.router.locale);
  return { ...appProps };
};

export default MyApp;
