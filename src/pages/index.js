import { Home } from 'Home';
import { getTestData } from 'Home/actions';
import { serverDispatch } from 'helpers';

export default Home;

export const getServerSideProps = async () => {
  const data = await serverDispatch(getTestData);
  return { props: { initialReduxState: data } };
};
