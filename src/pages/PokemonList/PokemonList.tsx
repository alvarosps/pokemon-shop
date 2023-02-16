import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getPokemonList } from '../../api/pokemon';
import { IPokemon, IPaginationOptions, IFilterOptions } from '../../types';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Pagination from '../../components/Pagination/Pagination';
import { filterOptions } from './filterOptions';
import { getFilteredPokemon } from '../../utils/filter';
import { paginatePokemon } from '../../utils/paginate';
import './PokemonList.scss';
import Header from '../../components/Header/Header';
import Spinner from '../../components/Spinner/Spinner';
import { Alert } from '@mui/material';
import { getSearchedPokemon } from '../../utils/search';

const PokemonList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterOptionsState, setFilterOptionsState] = useState<IFilterOptions>({
    moves: [],
  });
  const [paginationOptions, setPaginationOptions] = useState<IPaginationOptions>({
    page: 1,
    rowsPerPage: 20,
  });

  const { isLoading, isError, data } = useQuery('pokemonList', () =>
    getPokemonList());

  const { moves } = filterOptionsState;
  const hasFilterSelected = moves.length > 0;
  const hasSearch = searchQuery !== '';
  
  const getModifiedData = (hasSearch: boolean, hasFilterSelected: boolean): IPokemon[] => {
    if (data) {
      if (!hasSearch && !hasFilterSelected) {
        return data;
      }

      let dataModified: IPokemon[] = [];
      if (hasSearch) {
        dataModified = getSearchedPokemon(data, searchQuery);
      }
      if (hasFilterSelected ) {
        const filteredPokemon = dataModified ? getFilteredPokemon(dataModified, { moves }) : getFilteredPokemon(data, { moves });
        return filteredPokemon
      }

      return dataModified;
    } else {
      return [];
    }
  }

  const filteredPokemon = getModifiedData(hasSearch, hasFilterSelected);
  const paginatedPokemon = filteredPokemon.length > 0 ? paginatePokemon(filteredPokemon, paginationOptions) : [];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (selectedMoves: string[]) => {
    setFilterOptionsState({
      moves: selectedMoves
    });
  };

  const handlePageChange = (pageNumber: number) => {
    setPaginationOptions((prevState) => ({
      ...prevState,
      page: pageNumber,
    }));
  };

  const handlePageSizeChange = (pageSize: number) => {
    setPaginationOptions((prevState) => ({
      ...prevState,
      rowsPerPage: pageSize,
    }));
  }

  return (
    <div className='main-container'>
      <Header
        title='Pokemon Shop'
        query={searchQuery}
        onSearch={handleSearch}
        placeholder='Search Pokemon'
        filterOptions={filterOptions}
        onFilterChange={handleFilterChange}
      />
      {isLoading && <Spinner />}
      {isError && <Alert severity="error">Failed to load Pokemon list.</Alert>}
      {!isLoading && !isError && (
        <div className='list-container'>
          {paginatedPokemon.length > 0 && (
            <>
              <div className="pokemon-list">
                {paginatedPokemon.map((pokemon: IPokemon) => (
                  <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
              </div>
              <Pagination
                currentPage={paginationOptions.page}
                totalPages={Math.ceil(filteredPokemon.length / paginationOptions.rowsPerPage)}
                pageSize={paginationOptions.rowsPerPage}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
              />
            </>
          )}
          {paginatedPokemon.length === 0 && <div>There are not pokemons that match your search.</div>}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
