import React from 'react';

interface State<T> {
  past: T[];
  present: T;
  future: T[];
}

type Action<T> =
  | { type: 'UNDO' }
  | { type: 'REDO' }
  | { type: 'CLEAR'; initialPresent: T }
  | { type: 'SET'; newPresent: T };

function reducer<T>(state: State<T>, action: Action<T>): State<T> {
  const { type } = action;
  switch (type) {
    case 'SET':
      if (action.newPresent === state.present) {
        return state;
      }
      return {
        past: [...state.past, state.present],
        present: action.newPresent,
        future: [],
      };
    case 'UNDO':
      return {
        past: state.past.slice(0, state.past.length - 1),
        present: state.past[state.past.length - 1],
        future: [state.present, ...state.future],
      };
    case 'REDO':
      return {
        past: [...state.past, state.present],
        present: state.future[0],
        future: state.future.slice(1),
      };
    case 'CLEAR':
      return {
        past: [],
        present: action.initialPresent,
        future: [],
      };
    default:
      throw new Error(`Invalid action type: ${type}`);
  }
}

export default function useHistoryState<T>(initialPresent: T = {} as T) {
  const initialPresentRef = React.useRef(initialPresent);
  const [historyState, dispatch] = React.useReducer(reducer<T>, {
    past: [],
    present: initialPresent,
    future: [],
  });

  const set = React.useCallback((newPresent: T) => {
    dispatch({ type: 'SET', newPresent });
  }, []);

  const canUndo = historyState.past.length > 0;
  const canRedo = historyState.future.length > 0;

  const undo = React.useCallback(() => {
    if (!canUndo) return;
    dispatch({ type: 'UNDO' });
  }, [canUndo]);

  const redo = React.useCallback(() => {
    if (!canRedo) return;
    dispatch({ type: 'REDO' });
  }, [canRedo]);

  const clear = React.useCallback(() => {
    dispatch({ type: 'CLEAR', initialPresent: initialPresentRef.current });
  }, []);

  return {
    state: historyState.present,
    set,
    undo,
    redo,
    clear,
    canUndo,
    canRedo,
  } as const;
}
