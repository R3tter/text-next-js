import PropTypes from 'prop-types';
import Link from 'next/link';
import { StyleSheet, css } from 'aphrodite/no-important';
// remove this file.
const regular = StyleSheet.create({
  test: {
    color: 'red'
  }
});

const TestPage = ({ time }) => (
  <Link href="/">
    <a className={css(regular.test)}>{time}</a>
  </Link>
);

TestPage.propTypes = {
  time: PropTypes.any
};
export default TestPage;
export const getStaticProps = async () => ({ props: { time: new Date().toISOString() } });
