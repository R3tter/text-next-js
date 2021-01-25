import PropTypes from 'prop-types';

export const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
};
