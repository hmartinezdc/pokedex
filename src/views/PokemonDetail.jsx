import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';

const getPokemonById = async (id) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const PokemonDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const pokemon = await getPokemonById(id);
      setPokemon(pokemon);
    };
    if (!state?.pokemon) loadData();
    else setPokemon(state.pokemon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {pokemon && (
        <>
          <h1>{pokemon.name}</h1>
          <div className="fle flex-row justify-center">
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonDetail;
