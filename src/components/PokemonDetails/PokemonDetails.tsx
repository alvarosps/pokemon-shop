import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IPokemon } from '../../types';
import { Grid, Typography, Button } from '@mui/material';
import Spinner from '../Spinner/Spinner';
import './PokemonDetails.scss';

interface IPokemonDetailsProps {
  onBack: () => void;
}

const PokemonDetails: React.FC<IPokemonDetailsProps> = ({ onBack }) => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get<IPokemon>(`/api/pokemon/${id}`);
        const pokemon = response.data;
        if (!pokemon) {
          throw new Error("Empty response from API");
        }
        setPokemon(pokemon);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchPokemon();
  }, [id]);

  const handleBack = () => {
    onBack();
  };

  if (!pokemon) {
    return (
      <div className="loading-container">
        <Spinner />
      </div>
    );
  }

  const movesColumns: string[][] = [[], [], [], []];
  pokemon.moves.forEach((move, i) => {
    movesColumns[i % 4].push(move);
  });

  return (
    <div className="pokemon-details">
      <div className="pokemon-details-header">
        <Button variant="contained" onClick={handleBack}>Back</Button>
        <Typography variant="h4" className="pokemon-details-title">{pokemon.name}</Typography>
      </div>
      <Grid container spacing={2} className="pokemon-details-container">
        <Grid item xs={12} md={4}>
          <img src={pokemon.imageUrl} alt={`${pokemon.name} sprite`} className="pokemon-image" />
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="pokemon-details-info">
            <div className="pokemon-details-stats">
              <div>
                <Typography variant="subtitle1" gutterBottom>
                  Type
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  {pokemon.type}
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle1" gutterBottom>
                  Weight
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  {pokemon.weight} kg
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle1" gutterBottom>
                  Moves
                </Typography>
                <ul className="pokemon-details-moves-list">
                  {pokemon.moves.map((move, index) => (
                    <li key={index}>{move}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
  
}

export default PokemonDetails;