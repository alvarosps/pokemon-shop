import { IPokemon } from '../types';

type FilterOptions = {
  moves: string[];
};

export const getFilteredPokemon = (
  pokemonList: IPokemon[],
  filterOptions: FilterOptions
): IPokemon[] => {
  const { moves } = filterOptions;

  if (moves.length === 0) {
    return pokemonList;
  }

  const filteredPokemon = pokemonList.filter((pokemon) => {
    // Filter by moves
    const pokemonMoves = new Set(pokemon.moves);
    const selectedMoves = new Set(moves);

    let hasMoves = false;
    for (const move of selectedMoves) {
      if (pokemonMoves.has(move.toLowerCase().replaceAll(' ', '-'))) {
        hasMoves = true;
        break;
      }
    }

    return hasMoves;
  });


  return filteredPokemon;
};
