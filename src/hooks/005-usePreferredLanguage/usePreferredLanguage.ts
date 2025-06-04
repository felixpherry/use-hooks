import React from 'react';

function getPreferredLanguageSubscribe(cb: () => void) {
  window.addEventListener('languagechange', cb);
  return () => window.removeEventListener('languagechange', cb);
}

function getPreferredLanguageSnapshot(): string {
  return navigator.language;
}

function getPreferredLanguageServerSnapshot(): string {
  throw new Error('usePreferred language is a client-only-hook');
}

export default function usePreferredLanguage() {
  const language = React.useSyncExternalStore(
    getPreferredLanguageSubscribe,
    getPreferredLanguageSnapshot,
    getPreferredLanguageServerSnapshot
  );

  return language;
}
