import { useCallback } from 'react';
import { css } from 'aphrodite/no-important';
import { Modal, addModal } from '@jmind.systems/react-modal';
import { addNotification } from 'react-notify-library';

import { useClientOnly } from 'hooks';

import * as styles from './style';

export const Home = () => {
  const setModal = useCallback(() => addModal('test'), []);

  const modal = useClientOnly({
    component: Modal,
    props: {
      name: 'test',
      type: 'submit',
      onSubmit: () => setTimeout(() => addNotification('Test modal', { type: 'success' }), 200),
      children: 'Test'
    }
  });

  return (
    <>
      <div className={css(styles.regular.app)}>
        <div className={css(styles.regular.wrapper)} onClick={setModal}>
          Click
        </div>
        {modal}
      </div>
    </>
  );
};
