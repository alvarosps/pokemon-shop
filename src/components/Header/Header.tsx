import React from 'react';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import { IFilterOptions } from '../../types';
import './Header.scss';

interface IHeaderProps {
  title: string;
  query: string;
  placeholder: string;
  onSearch: (query: string) => void;
  filterOptions: IFilterOptions;
  onFilterChange: (selectedMoves: string[]) => void;
}

const Header: React.FC<IHeaderProps> = ({ title, query, placeholder, onSearch, filterOptions, onFilterChange }) => {
  return (
    <div className="header">
      <div className="title">{title}</div>
      <div className="right">
        <div className="search">
          <Search query={query} onSearch={onSearch} placeholder={placeholder} />
        </div>
        <div className="filter">
          <Filter filterOptions={filterOptions} onFilterChange={onFilterChange} />
        </div>
      </div>
    </div>
  );
};

export default Header;
