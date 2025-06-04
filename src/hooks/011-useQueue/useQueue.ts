import React from 'react';

export default function useQueue<T>(initialValue: T[] = []) {
  const [queue, setQueue] = React.useState(initialValue);

  const add = React.useCallback((item: T) => {
    setQueue((v) => [...v, item]);
  }, []);

  const remove = React.useCallback(() => {
    let removedItem;
    setQueue(([first, ...q]) => {
      removedItem = first;
      return q;
    });
    return removedItem;
  }, []);

  const clear = React.useCallback(() => {
    setQueue([]);
  }, []);

  const first = queue[0];
  const last = queue[queue.length - 1];
  const size = queue.length;

  return {
    add,
    remove,
    clear,
    first,
    last,
    size,
    queue,
  };
}
