import React from 'react';

export default function useToggle(initialValue: boolean = false) {
  const [on, setOn] = React.useState(!!initialValue);

  const toggle = React.useCallback((value?: boolean) => {
    if (typeof value === 'boolean') setOn(value);
    else setOn((v) => !v);
  }, []);

  return [on, toggle] as const;
}
