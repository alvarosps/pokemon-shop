import React from 'react';
import { Link } from 'react-router-dom';
import { IPokemon } from '../../types';
import './PokemonCard.scss';

interface IPokemonCardProps {
  pokemon: IPokemon;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="pokemon-card">
      <img src={pokemon.imageUrl} alt={`${pokemon.name} sprite`} />
      <h3>{pokemon.name}</h3>
    </Link>
  );
};

export default PokemonCard;
