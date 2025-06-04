import React from 'react';

function getVisibilityChangeSubscribe(cb: () => void) {
  window.addEventListener('visibilitychange', cb);
  return () => window.removeEventListener('visibilitychange', cb);
}

function getVisibilityChangeSnapshot(): boolean {
  return !document.hidden;
}

function getVisibleChangeServerSnapshot(): boolean {
  throw Error('useVisibilityChange is a client-only hook');
}

export default function useVisibilityChange() {
  return React.useSyncExternalStore(
    getVisibilityChangeSubscribe,
    getVisibilityChangeSnapshot,
    getVisibleChangeServerSnapshot
  );
}
