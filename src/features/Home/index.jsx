import { useCallback } from 'react';
import { css } from 'aphrodite/no-important';
import dynamic from 'next/dynamic';
import { addModal } from '@jmind.systems/react-modal';
import { addNotification } from 'react-notify-library';
import { StatusController } from '@jmind.systems/react-status-controller';

import * as styles from './style';

const Modal = dynamic(() => import('@jmind.systems/react-modal').then(mod => mod.Modal), {
  ssr: false
});

export const Home = () => {
  const setModal = useCallback(() => addModal('test'), []);
  return (
    <StatusController statuses={['success']}>
      <div className={css(styles.regular.app)}>
        <div className={css(styles.regular.wrapper)} onClick={setModal}>
          Click
        </div>
        <Modal
          name="test"
          type="submit"
          onSubmit={() => setTimeout(() => addNotification('Test from modal', { type: 'success' }), 200)}
        >
          Test
        </Modal>
      </div>
    </StatusController>
  );
};
