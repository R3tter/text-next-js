import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { StyleSheet, css } from 'aphrodite/no-important';
// remove this file.
const regular = StyleSheet.create({
  test: {
    color: 'red'
  }
});

const TestPage = ({ time }) => {
  const { t } = useTranslation(['common']);
  return (
    <Link href="/" locale="en">
      <a className={css(regular.test)}>
        {t('test')} {time}
      </a>
    </Link>
  );
};

TestPage.propTypes = {
  time: PropTypes.any
};
export default TestPage;
export const getStaticProps = async () => ({ props: { time: new Date().toISOString() } });
