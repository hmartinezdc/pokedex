import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PokemonCard.css';
import './borderColor.css';
import getColors from '../../utils/getColors';
import getBorderColor from '../../utils/getBorderColor';

const getPokemonById = async (url) => {
  try {
    const res = await axios.get(url);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const PokemonCard = ({ pokemonData }) => {
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate(`/pokedex/${pokemon.id}`, { state: { pokemon } });
  };

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonInfo = await getPokemonById(pokemonData.url);

      setPokemon(pokemonInfo);
    };
    loadPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {pokemon && (
        <article
          onClick={handleClickNavigate}
          className={`${getBorderColor(pokemon.types[0].type.name)} pokemon-card`}
        >
          <header
            className={`${getColors(pokemon.types[0].type.name)} pokemon-header--heigth`}
          >
            <div className="pokemon-img">
              <img
                loading="lazy"
                src={pokemon.sprites.other['dream_world'].front_default}
                alt={pokemon.name}
              />
            </div>
          </header>

          <section className="pokemon-information">
            <section className="pokemon-information-name">
              <h2>
                {pokemon.name.replace(/^\w/, (character) => character.toUpperCase())}
              </h2>
              <p>
                <span>
                  {pokemon.types[0].type.name.replace(/^\w/, (character) =>
                    character.toUpperCase(),
                  )}
                </span>
              </p>
              <p>Tipo</p>
            </section>

            <section className="pokemon-information-skills">
              {pokemon.stats.map((stat) => (
                <section key={stat.stat.name}>
                  <h3>{stat.stat.name.toUpperCase()}</h3>
                  <p>{stat.base_stat}</p>
                </section>
              ))}
            </section>
          </section>
        </article>
      )}
    </>
  );
};

export default PokemonCard;
