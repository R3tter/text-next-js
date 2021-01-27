import { useMemo, useEffect } from 'react';
import { initializeStore } from 'store';

export const useIsClient = () => useMemo(() => typeof document !== 'undefined', []);

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
