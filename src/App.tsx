import React from 'react';
import useDebounce from './hooks/017-useDebounce/useDebounce';

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  return (
    <div>
      <input
        type='search'
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <p>{searchTerm}</p>
      <p>{debouncedSearchTerm}</p>
    </div>
  );
}
