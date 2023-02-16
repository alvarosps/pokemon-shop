import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from '../pages/PokemonList/PokemonList';
import PokemonDetailsPage from '../pages/PokemonDetailsPage/PokemonDetailsPage';

const ErrorPage = () => {
  return <div>Sorry, something went wrong.</div>;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id/*" element={<PokemonDetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
