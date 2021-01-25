import { css } from 'aphrodite/no-important';

import * as styles from './style';

export const Home = () => (
  <>
    <div className={css(styles.regular.app)}>
      <div className={css(styles.regular.wrapper)}>Click</div>
    </div>
  </>
);
