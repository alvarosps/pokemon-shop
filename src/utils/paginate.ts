import { IPokemon, IPaginationOptions } from "../types";

export function paginatePokemon(pokemon: IPokemon[], options: IPaginationOptions) {
  const { page, rowsPerPage } = options;

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return pokemon.slice(startIndex, endIndex);
}
