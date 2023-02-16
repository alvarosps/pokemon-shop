import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { IPokemon } from '../../src/types';
import { getPokemonList } from '../../src/api/pokemon';
import PokemonList from '../../src/pages/PokemonList/PokemonList';

jest.mock('../../src/api/pokemon');

const mockPokemonList: IPokemon[] = [
  {
    id: 1,
    name: 'bulbasaur',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    type: 'grass',
    weight: 69,
    moves: ['razor-wind', 'swords-dance', 'cut', 'bind', 'vine-whip', 'headbutt'],
  },
  {
    id: 2,
    name: 'ivysaur',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    type: 'grass',
    weight: 130,
    moves: ['razor-wind', 'swords-dance', 'cut', 'bind', 'vine-whip', 'headbutt'],
  },
];

describe('PokemonList', () => {
  let queryClient: QueryClient;

  beforeAll(() => {
    queryClient = new QueryClient();
  });

  afterEach(() => {
    jest.resetAllMocks();
    queryClient.clear();
  });

  it('should render the list of pokemons', async () => {
    (getPokemonList as jest.MockedFunction<typeof getPokemonList>).mockResolvedValue(mockPokemonList);

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/']}>
          <PokemonList />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('bulbasaur')).toBeInTheDocument();
      expect(screen.getByText('ivysaur')).toBeInTheDocument();
    });
  });
});
