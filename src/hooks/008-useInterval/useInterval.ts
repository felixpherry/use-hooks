import React from 'react';

export default function useInterval(cb: () => void, ms: number) {
  const [isRunning, setIsRunning] = React.useState(true);

  const clear = React.useCallback(() => {
    setIsRunning(false);
  }, []);

  // At first, I thought that cb should not be part of the dependency array, but stale closure is a thing.
  React.useEffect(() => {
    if (!isRunning) return;
    const intervalId = setInterval(cb, ms);
    return () => clearInterval(intervalId);
  }, [cb, isRunning, ms]);

  return clear;
}
