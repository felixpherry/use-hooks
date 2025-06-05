import React from 'react';

export default function useContinuousRetry(
  cb: () => unknown,
  interval: number,
  options: { maxRetries: number } = { maxRetries: Infinity }
) {
  const numOfRetry = React.useRef(0);
  const [hasResolved, setHasResolved] = React.useState(false);

  React.useEffect(() => {
    if (hasResolved) return;
    const intervalId = setInterval(() => {
      const value = cb();
      numOfRetry.current += 1;
      if (value || numOfRetry.current >= options.maxRetries) {
        clearInterval(intervalId);
      }
      if (value) {
        setHasResolved(true);
      }
    }, interval);
    return () => clearInterval(intervalId);
  }, [cb, hasResolved, interval, options.maxRetries]);

  return hasResolved;
}
