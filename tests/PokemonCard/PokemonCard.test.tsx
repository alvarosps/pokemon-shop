import React from 'react';
import { render, screen } from '@testing-library/react';
import { IPokemon } from '../../src/types';
import PokemonCard from '../../src/components/PokemonCard/PokemonCard';

const mockPokemon: IPokemon = {
  id: 1,
  name: 'Bulbasaur',
  imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  type: 'grass',
  weight: 100,
  moves: ['quick-attack'],
};

import { BrowserRouter } from 'react-router-dom';

describe('PokemonCard component', () => {
  it('renders the pokemon name', () => {
    render(
      <BrowserRouter>
        <PokemonCard pokemon={mockPokemon} />
      </BrowserRouter>
    );
    expect(screen.getByText(mockPokemon.name)).toBeInTheDocument();
  });

    it('renders the pokemon image', () => {
        render(
            <BrowserRouter>
              <PokemonCard pokemon={mockPokemon} />
            </BrowserRouter>
          );
        expect(screen.getByAltText(`${mockPokemon.name} sprite`)).toBeInTheDocument();
    });

    it('links to the correct pokemon page', () => {
        render(
            <BrowserRouter>
              <PokemonCard pokemon={mockPokemon} />
            </BrowserRouter>
          );
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', `/pokemon/${mockPokemon.id}`);
    });
});

