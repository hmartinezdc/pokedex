import { React, useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import { usePagination } from '../../hooks/usePagination';
import { Form } from 'react-router-dom';
import PokemonCard from '../../components/pokedex/PokemonCard/PokemonCard';
import './Pokedex.css';
import PageComponent from '../../components/pokedex/PageComponent/PageComponent';

const Pokedex = () => {
  const { userName } = useContext(UserContext);
  const { pokemons, types, name, type } = useLoaderData();
  const [pokemonName, setPokemonName] = useState(name ?? '');
  const [pokemonType, setPokemonType] = useState(type ?? '');

  const [pageNumber, listSlice, changePages, totalPages] = usePagination(pokemons, 200);

  const handleNameChange = (e) => {
    setPokemonName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setPokemonType(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setPokemonName('');
  };

  useEffect(() => {
    setPokemonName(name ?? '');
  }, [name]);

  useEffect(() => {
    setPokemonType(type ?? '');
  }, [type]);

  return (
    <div className="pokedex-container" onSubmit={handleSubmit}>
      <h2 className="pokedex-title">
        Pokedex <img src="https://i.imgur.com/j2MUPzP.png" alt="pokebola" />
      </h2>
      <p className="welcome-poketrainer">
        <span>
          <img src="https://i.imgur.com/zEOE5cv.jpg" alt="Ash" />
        </span>
        <span>
          Bienvenido {userName.trim().replace(/^\w/, (num) => num.toUpperCase())}
        </span>
      </p>

      <Form className="form-container">
        <div className="forms">
          <button className="" type="submit">
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            type="list"
            list="pokemon-list"
            name="pokemon_name"
            className=""
            value={pokemonName}
            onChange={handleNameChange}
            placeholder="Busca aqui tu pokemon favorito"
          />
          <datalist id="pokemon-list">
            {pokemons.map((pokemon) => (
              <option key={pokemon.url} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
          </datalist>
          <select name="pokemon_type" value={pokemonType} onChange={handleTypeChange}>
            <option value="">-- Todos los tipos de pokemon --</option>
            {types.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      </Form>
      <PageComponent
        pageNumber={pageNumber}
        changePages={changePages}
        totalPages={totalPages}
      />
      <section className="galery-pokemons">
        {listSlice.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonData={pokemon} />
        ))}
      </section>
      <PageComponent
        pageNumber={pageNumber}
        changePages={changePages}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Pokedex;
