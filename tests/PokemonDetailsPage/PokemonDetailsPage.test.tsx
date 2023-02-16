import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import PokemonDetailsPage from '../../src/pages/PokemonDetailsPage/PokemonDetailsPage';

describe('PokemonDetailsPage', () => {
  it('should render the PokemonDetails component', () => {
    render(
        <MemoryRouter initialEntries={[`/pokemon/1`]}>
          <Routes>
            <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
          </Routes>
        </MemoryRouter>
      );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
