import React from 'react';

export default function useTimeout(cb: () => void, ms: number) {
  const [cancelled, setCancelled] = React.useState(false);

  const clear = React.useCallback(() => {
    setCancelled(true);
  }, []);

  React.useEffect(() => {
    if (cancelled) return;
    const timeoutId = setTimeout(() => {
      cb();
    }, ms);
    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cancelled, ms]);

  return clear;
}
