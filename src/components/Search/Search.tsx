import React from 'react';
import './Search.scss';

interface ISearchProps {
  query: string;
  onSearch: (query: string) => void;
  placeholder: string;
}

const Search: React.FC<ISearchProps> = ({ query, onSearch, placeholder }) => {
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    onSearch(newQuery);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={query}
      onChange={handleQueryChange}
    />
  );
};

export default Search;
