import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getPokemonById } from '../../services/getPokemonById';
import { getTypePokemon } from '../../utils/getTypePokemon';
import getBorderColor from '../../utils/getBorderColor';
import getTextColor from '../../utils/getTextColor';
import getColors from '../../utils/getColors';
import './PokemonDetail.css';

const PokemonDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [pokemon, setPokemon] = useState(null);
  const getAbbreviation = (nameSkill) => {
    const skill = {
      'special-attack': 'Sp. Atk',
      'special-defense': 'Sp. Def',
    };
    return skill[nameSkill] || nameSkill;
  };

  useEffect(() => {
    const loadData = async () => {
      const pokemon = await getPokemonById(id);
      setPokemon(pokemon);
    };
    if (!state?.pokemon) loadData();
    else setPokemon(state.pokemon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="pokemon__detail-container">
      {pokemon && (
        <section className="pokemon__detail">
          <section className="pokemon__detail_name-number">
            <h1 className="pokemon__name">{pokemon.name}</h1>
            <h2 className="pokemon__number">#{pokemon.number}</h2>
          </section>
          <section className="pokemon__detail_description-img">
            <ul className="detail__description">
              <li>
                <span>Altura: </span>
                {pokemon.height / 10}m
              </li>
              <li>
                <span>Peso: </span>
                {pokemon.weight / 10}kg
              </li>
            </ul>
            <div className="detail__img">
              <img src={pokemon.img} alt={pokemon.name} />
            </div>
          </section>
          <section className="pokemon__detail_skills-stats">
            <div className="datail__skills-types">
              {pokemon.types.map((type) => (
                <span key={type} className={getBorderColor(type)}>
                  <img src={getTypePokemon(type)} alt={type} />
                  <p className={getTextColor(type)}>
                    {type.replace(/^\w/, (char) => char.toUpperCase())}
                  </p>
                </span>
              ))}
            </div>
            <div className="detail__skills-abilities">
              <h2>Habilidades</h2>
              <div className="skills-abilities">
                {pokemon.abilities.map((ability) => (
                  <p key={ability}>{ability}</p>
                ))}
              </div>
            </div>
            <div className="detail__skills-stats">
              <h2 className="skill__stats-title">Estadisticas</h2>
              {pokemon.stats.map((stat) => (
                <div key={stat.name} className="skill__stat">
                  <h3 className="skill__stat-name">
                    {getAbbreviation(stat.name).replace(/^\w/, (char) =>
                      char.toUpperCase(),
                    )}
                  </h3>
                  <div className="skill__stat-percent">
                    <div
                      className={getColors(pokemon?.types[0])}
                      style={{ width: `${stat.percent}%` }}
                    ></div>
                  </div>
                  <p className="skill-power">{stat.value}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
      )}
      <section className="pokemon__detail_back-next">
        <Link
          to={`/pokedex/${Number(id) - 1}`}
          className={`Link__button ${getTextColor(pokemon?.types[0])}`}
        >
          {' '}
          <i className="fa-solid fa-arrow-left"></i> Atras{' '}
        </Link>
        <Link
          to={`/pokedex/${Number(id) + 1}`}
          className={`Link__button ${getTextColor(pokemon?.types[0])}`}
        >
          {' '}
          Siguiente <i className="fa-solid fa-arrow-right"></i>{' '}
        </Link>
      </section>
    </div>
  );
};

export default PokemonDetail;
