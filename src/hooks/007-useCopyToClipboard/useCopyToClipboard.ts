import React from 'react';

function oldSchoolCopy(text: string) {
  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = text;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextarea);
}

export default function useCopyToClipboard() {
  const [copiedText, setCopiedText] = React.useState<null | string>(null);

  const copyToClipboard = React.useCallback((text: string) => {
    async function handleCopy() {
      try {
        if ('writeText' in navigator.clipboard) {
          await navigator.clipboard.writeText(text);
          setCopiedText(text);
        } else {
          throw new Error('writeText is not supported');
        }
      } catch {
        oldSchoolCopy(text);
        setCopiedText(text);
      }
    }
    handleCopy();
  }, []);

  return [copiedText, copyToClipboard] as const;
}
