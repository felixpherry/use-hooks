import React from 'react';

export default function usePrevious<T>(state: T) {
  const [previous, setPrevious] = React.useState<T | null>(null);
  const [current, setCurrent] = React.useState<T>(state);

  // Apparently you can just do it at the top level. Why didn't I think about that?
  if (current !== state) {
    setPrevious(current);
    setCurrent(state);
  }

  // React.useEffect(() => {
  //   setPrevious(current);
  //   setCurrent(state);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [state]);
  // // At first, I thought that there will be a stale closure problem since I don't include current inside the dependency array
  // // but then I realized that it won't be a problem since putting state into the dependency array is more than enough.

  return previous;
}
