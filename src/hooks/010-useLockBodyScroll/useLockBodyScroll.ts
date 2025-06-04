import React from 'react';

export default function useLockBodyScroll() {
  // useLayoutEffect because we don't want the scrollbar to exist even for 1ms. It will create janky experience.
  React.useLayoutEffect(() => {
    // use window.getComputedStyle instead of document.body.style since the latter only takes inline style into account.
    // window.getComputedStyle is the most accurate way of getting the original style
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
}
