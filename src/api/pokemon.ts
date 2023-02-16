import axios from 'axios';
import { IPokemon } from '../types/';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemon = async (id: number): Promise<IPokemon> => {
  const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
  const { name, sprites, types, weight, moves } = response.data;

  return {
    id,
    name,
    imageUrl: sprites.front_default,
    type: types[0].type.name,
    weight,
    moves: moves.map((move: any) => move.move.name),
  };
};

export const getPokemonList = async (): Promise<IPokemon[]> => {
  const response = await axios.get(
    `${BASE_URL}/pokemon?offset=0&limit=10000`
  );

  const results = response.data.results;

  const pokemonList = await Promise.all(
    results.map(async (result: any) => {
      const pokemonResponse = await axios.get(result.url);
      const { id, name, sprites, types, weight, moves } = pokemonResponse.data;

      return {
        id,
        name,
        imageUrl: sprites.front_default,
        type: types[0].type.name,
        weight,
        moves: moves.map((move: any) => move.move.name),
      };
    })
  );

  return pokemonList;
};

export const getPokemonCount = async (): Promise<number> => {
  const response = await axios.get(`${BASE_URL}/pokemon`);
  const count = response.data.count;

  return count;
};
