import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import PokemonDetails from '../../src/components/PokemonDetails/PokemonDetails';

jest.mock('axios');

describe('PokemonDetails', () => {
  const pokemon = {
    id: 1,
    name: 'bulbasaur',
    type: 'grass, poison',
    weight: 69,
    moves: ['razor-wind', 'swords-dance', 'cut', 'bind', 'vine-whip'],
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  };

  it('should render a spinner when pokemon is not loaded yet', async () => {
    render(<PokemonDetails onBack={() => {}} />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
  
  

  it('should fetch and render pokemon details', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: pokemon });
    render(<PokemonDetails onBack={() => {}} />);

    await waitFor(() => {
      expect(screen.getByText(pokemon.name)).toBeInTheDocument();
    });
  });
});
