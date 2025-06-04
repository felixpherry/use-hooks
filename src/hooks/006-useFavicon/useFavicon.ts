import React from 'react';

export default function useFavicon(faviconUrl: string) {
  React.useEffect(() => {
    let link = document.querySelector(
      "link[rel~='icon']"
    ) as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement('link') as HTMLLinkElement;
      link.type = 'image/x-icon';
      link.rel = 'icon';
      link.href = faviconUrl;
      document.head.appendChild(link);
    } else {
      link.href = faviconUrl;
    }
  }, [faviconUrl]);
}
