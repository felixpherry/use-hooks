import React from 'react';

export default function useObjectState<T extends Record<string, unknown>>(
  initialValue: T
) {
  const [state, setState] = React.useState(initialValue);

  const handleUpdate = React.useCallback(
    (callbackOrObject: T | ((state: T) => Partial<T>)) => {
      setState((curr) => {
        const newState =
          typeof callbackOrObject === 'function'
            ? callbackOrObject(curr)
            : callbackOrObject;
        return {
          ...curr,
          ...newState,
        };
      });
    },
    []
  );

  return [state, handleUpdate] as const;
}
