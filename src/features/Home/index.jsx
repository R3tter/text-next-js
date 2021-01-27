import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { addModal } from '@jmind.systems/react-modal';
import { addNotification } from 'react-notify-library';
import { StatusController } from '@jmind.systems/react-status-controller';

import { getData } from 'Home/selectors';

import * as styles from './style';

const Modal = dynamic(() => import('@jmind.systems/react-modal').then(mod => mod.Modal), {
  ssr: false
});

export const Home = ({ time }) => {
  const setModal = useCallback(() => addModal('test'), []);
  const { t } = useTranslation(['common']);
  const data = useSelector(getData);
  return (
    <StatusController statuses={['success']}>
      <div className={css(styles.regular.app)}>
        <div className={css(styles.regular.wrapper)} onClick={setModal}>
          {t('click')} {time}
        </div>
        <Link href="/testPage" locale="ru">
          <a>Test page {data.id}</a>
        </Link>
        <Modal
          name="test"
          type="submit"
          onSubmit={() => setTimeout(() => addNotification('Test from modal', { type: 'success' }), 200)}
        >
          {t('test')}
        </Modal>
      </div>
    </StatusController>
  );
};

Home.propTypes = {
  time: PropTypes.any
};
