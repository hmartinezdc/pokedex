import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PokemonCard.css';
import './borderColor.css';
import './textColor.css';
import getColors from '../../../utils/getColors';
import getBorderColor from '../../../utils/getBorderColor';
import getTextColor from '../../../utils/getTextColor';
import { getPokemonData } from '../../../services/getPokemonData';
import { getTypePokemon } from '../../../utils/getTypePokemon';

const statsTarget = ['hp', 'attack', 'defense', 'speed'];

const PokemonCard = ({ pokemonData }) => {
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  const statsFilter = pokemon?.stats.filter((stat) =>
    statsTarget.includes(stat.name.toLowerCase()),
  );

  const handleClickNavigate = () => {
    navigate(`/pokedex/${pokemon.id}`);
  };
  // , { state: { pokemon } }

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonInfo = await getPokemonData(pokemonData.url);
      setPokemon(pokemonInfo);
    };
    loadPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {pokemon && (
        <article onClick={handleClickNavigate} className={` pokemon-card`}>
          <header className={`${getColors(pokemon.types[0])} pokemon-header--heigth`}>
            <div className="pokemon-img">
              <img loading="lazy" src={pokemon.img} alt={pokemon.name} />
            </div>
          </header>

          <section className="pokemon-information">
            <section className="pokemon-information-name">
              <h2>{pokemon.name}</h2>
              <p>Tipo de pokemon</p>
              <h3>
                {pokemon.types.map((type) => (
                  <span key={type} className={getBorderColor(type)}>
                    <img src={getTypePokemon(type)} alt={type} />
                    <p className={getTextColor(type)}>
                      {type.replace(/^\w/, (char) => char.toUpperCase())}
                    </p>
                  </span>
                ))}
              </h3>
            </section>
            <section className="pokemon-information-skills">
              {statsFilter.map((stat) => (
                <div key={stat.name}>
                  <h3 className="skill-power-title">
                    {stat.name.replace(/^\w/, (char) => char.toUpperCase())}
                  </h3>
                  <p className={`skill-power`}>{stat.value}</p>
                </div>
              ))}
            </section>
          </section>
        </article>
      )}
    </>
  );
};

export default PokemonCard;
