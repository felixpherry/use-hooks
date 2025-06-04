import React from 'react';

function getWindowSizeSubscribe(cb: () => void) {
  window.addEventListener('resize', cb);
  return () => {
    window.removeEventListener('resize', cb);
  };
}

interface WindowSize {
  width: number;
  height: number;
}

let cachedSize: WindowSize | undefined;
function getWindowSizeSnapshot(): WindowSize {
  if (typeof cachedSize !== 'undefined') {
    if (
      cachedSize.height === window.innerHeight &&
      cachedSize.width === window.innerWidth
    ) {
      return cachedSize;
    } else {
      return (cachedSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }

  return (cachedSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  });
}

function getWindowSizeServerSnapshot(): WindowSize {
  throw new Error('useWindow size is a client-only hook');
}

export default function useWindowSize() {
  const size = React.useSyncExternalStore(
    getWindowSizeSubscribe,
    getWindowSizeSnapshot,
    getWindowSizeServerSnapshot
  );
  return size;
}
