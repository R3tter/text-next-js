import { useMemo } from 'react';
import { initializeStore } from 'store';

export const useIsClient = () => useMemo(() => typeof document !== 'undefined', []);

export const useStore = initialState => useMemo(() => initializeStore(initialState), [initialState]);
