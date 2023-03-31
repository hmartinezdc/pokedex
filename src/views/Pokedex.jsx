import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { UserContext } from '../contexts/UserContext';
import PokemonCard from '../components/PokemonCard/PokemonCard';
import { usePagination } from '../hooks/usePagination';
import { Form } from 'react-router-dom';
import './Pokedex.css';

const Pokedex = () => {
  const { user } = useContext(UserContext);
  const { pokemons, types, name, type } = useLoaderData();
  const [pokemonName, setPokemonName] = useState(name ?? '');
  const [pokemonType, setPokemonType] = useState(type ?? '');
  const pokemonsPagination = usePagination(pokemons, 55);

  const handleNameChange = (e) => {
    setPokemonName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setPokemonType(e.target.value);
  };

  useEffect(() => {
    setPokemonName(name ?? '');
  }, [name]);

  useEffect(() => {
    setPokemonType(type ?? '');
  }, [type]);

  return (
    <div className="pokedex-container">
      <div className="header">
        <img src="/pokedex.png" alt="" />
      </div>
      <p className="welcome-poketrainer">
        <span className="text-red-500 font-semibold">Bienvenido {user}, </span>
        aqui podras encontrar tu pokemon favorito
      </p>

      <div className="pagination">
        {pokemonsPagination.pages.map((page) => (
          <div key={page}>
            <button
              onClick={() => pokemonsPagination.changePageTo(page)}
              className={pokemonsPagination.currentPage === page ? 'text-red-500' : ''}
            >
              {page}
            </button>
          </div>
        ))}
      </div>

      <div className="search-container">
        <Form className="form-container">
          <h3 className="text-red-500">Filter for search</h3>
          <div className="forms">
            <input
              type="list"
              list="pokemon-list"
              name="pokemon_name"
              className=""
              value={pokemonName}
              onChange={handleNameChange}
            />
            <datalist id="pokemon-list">
              {pokemons.map((pokemon) => (
                <option key={pokemon.url} value={pokemon.name}>
                  {pokemon.name}
                </option>
              ))}
            </datalist>
            <button className="" type="submit">
              <i
                className="fa-sharp fa-solid fa-magnifying-glass"
                style={{ color: '#000000' }}
              ></i>
            </button>
            <select name="pokemon_type" value={pokemonType} onChange={handleTypeChange}>
              <option value="">-All Pokemons-</option>
              {types.map((type) => (
                <option key={type.name} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </Form>
      </div>

      <section className="galery-pokemons">
        {pokemonsPagination.listSlice.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonData={pokemon} />
        ))}
      </section>
    </div>
  );
};

export default Pokedex;
