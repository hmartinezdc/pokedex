import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getPokemonById } from '../../services/getPokemonById';
import { getTypePokemon } from '../../utils/getTypePokemon';
import getBorderColor from '../../utils/getBorderColor';
import getTextColor from '../../utils/getTextColor';
import './PokemonDetail.css';

const PokemonDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const pokemon = await getPokemonById(id);
      console.log(pokemon);
      setPokemon(pokemon);
    };
    if (!state?.pokemon) loadData();
    else setPokemon(state.pokemon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pokemon__detail-container">
      {pokemon && (
        <>
          <section>
            <h1>{pokemon.name}</h1>
            <h2>#{pokemon.number}</h2>
          </section>
          <section className="">
            <ul>
              <li>
                <span>Altura: </span>
                {pokemon.height}m
              </li>
              <li>
                <span>Peso: </span>
                {pokemon.weight}kg
              </li>
            </ul>
            <img src={pokemon.img} alt={pokemon.name} />
          </section>
          <section>
            <div className="pokemon__detail-types">
              {pokemon.types.map((type) => (
                <span key={type} className={getBorderColor(type)}>
                  <img src={getTypePokemon(type)} alt={type} />
                  <p className={getTextColor(type)}>
                    {type.replace(/^\w/, (char) => char.toUpperCase())}
                  </p>
                </span>
              ))}
            </div>
            <div>
              <h2>Habilidades</h2>
              {pokemon.abilities.map((ability) => (
                <p key={ability}>{ability}</p>
              ))}
            </div>
            <div className="">
              <h2>Estadisticas</h2>
              {pokemon.stats.map((stat) => (
                <div key={stat.name}>
                  <h3 className="">
                    {stat.name.replace(/^\w/, (char) => char.toUpperCase())}
                  </h3>
                  <div>
                    <div></div>
                  </div>
                  <p className={`skill-power`}>{stat.value}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default PokemonDetail;
