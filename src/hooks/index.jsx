import { useMemo, useEffect, useState, useCallback } from 'react';
import { initializeStore } from 'store';
import { wrappedItems } from 'constants';
import { breakpoints } from 'constants/style';

import { wrapClient } from 'helpers';

export const useStore = initialState => useMemo(() => initializeStore(initialState), [initialState]);

export const setInitialLang = i18next => {
  let changed = false;
  return lang => {
    // rehydrate
    !changed && i18next.changeLanguage(lang);
    changed = true;
    useEffect(() => {
      // client part
      i18next.changeLanguage(lang);
    }, [lang]);
  };
};

export const useListener = (node, type, callback, deps = []) =>
  useEffect(() => {
    node?.addEventListener(type, callback);
    return () => {
      node?.removeEventListener(type, callback);
    };
  }, deps);

export const useScreenSize = (preselected = false, breakpoint = 'md') => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [mobile, setMobile] = useState(preselected);

  const wind = wrapClient(wrappedItems.window);

  const update = useCallback(() => {
    const { innerWidth: width, innerHeight: height } = wind ?? { innerWidth: 0, innerHeight: 0 };
    setSize({ width, height });
    setMobile(width <= parseInt(breakpoints[breakpoint], 10));
  }, [breakpoint, wind]);

  useEffect(() => {
    // first trigger on mount
    update();
  }, []);

  useListener(wind, 'resize', update);

  return {
    mobile,
    size
  };
};
