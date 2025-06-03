import React from 'react';

export default function useDefault<T>(initialState: T, defaultState: T) {
  const [state, setState] = React.useState(initialState ?? defaultState);
  return [state ?? defaultState, setState];
}
