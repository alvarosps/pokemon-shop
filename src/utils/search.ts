import { IPokemon } from "../types";

export const getSearchedPokemon = (pokemonList: IPokemon[], searchQuery: string): IPokemon[] => {
    const searchedPokemon = pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(searchQuery));
    return searchedPokemon;
}