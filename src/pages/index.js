import { useEffect, useCallback } from 'react';
import { Modal, addModal } from '@jmind.systems/react-modal';
import { addNotification, Notifications } from 'react-notify-library';

const Home = () => {
  const setModal = useCallback(() => addModal('test'), []);
  return (
    <div>
      <Notifications />
      <div>
        <div onClick={setModal}>Click</div>
        <Modal
          name="test"
          type="submit"
          onSubmit={() => setTimeout(() => addNotification(t('test'), { type: 'success' }), 200)}
        >
          Test
        </Modal>
      </div>
    </div>
  );
};

export default Home;
