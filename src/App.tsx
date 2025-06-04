import React from 'react';
import useFavicon from './hooks/006-useFavicon/useFavicon';

export default function App() {
  const [favicon, setFavicon] = React.useState(
    'https://ui.dev/favicon/favicon-32x32.png'
  );

  useFavicon(favicon);

  return (
    <section>
      <h1>useFavicon</h1>

      <button
        title="Set the favicon to Bytes' logo"
        className='link'
        onClick={() =>
          setFavicon('https://bytes.dev/favicon/favicon-32x32.png')
        }
      >
        Bytes
      </button>
      <button
        title="Set the favicon to React Newsletter's logo"
        className='link'
        onClick={() =>
          setFavicon('https://reactnewsletter.com/favicon/favicon-32x32.png')
        }
      >
        React Newsletter
      </button>

      <button
        title="Set the favicon to uidotdev's logo"
        className='link'
        onClick={() => setFavicon('https://ui.dev/favicon/favicon-32x32.png')}
      >
        ui.dev
      </button>
    </section>
  );
}
