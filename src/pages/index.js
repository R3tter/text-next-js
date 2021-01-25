import { Home } from 'Home';
import { initializeStore } from 'src/store';

export default Home;

export const getServerSideProps = async () => {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  dispatch({
    type: 'test',
    payload: {
      tokenSSR: 'token'
    }
  });

  return { props: { initialReduxState: reduxStore.getState() } };
};
