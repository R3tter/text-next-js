import { useMemo } from 'react';

export const useIsClient = () => useMemo(() => typeof document !== 'undefined', []);

export const useClientOnly = ({ component: Component, props }) => {
  const isClient = useIsClient();
  return useMemo(() => isClient && <Component {...props}>{props?.children}</Component>, [isClient, props, Component]);
};
