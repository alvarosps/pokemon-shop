import React from 'react';
import { useNavigate } from 'react-router-dom';
import PokemonDetails from '../../components/PokemonDetails/PokemonDetails';

const PokemonDetailsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="pokemon-details-page">
      <PokemonDetails onBack={handleBack} />
    </div>
  );
};

export default PokemonDetailsPage;
