import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import Footer from '../Footer/Footer';
import './PokemondexLayout.css';
import ButtonSwitch from '../ButtonSwitch/ButtonSwitch';

const PokedexLayout = () => {
  const { removeUser } = useContext(UserContext);

  return (
    <>
      {/* Aqui va ir mi boton de darkmode y el footer o algun componente que quiero que se vea en las ruta Layout*/}
      <div className="container__button">
        <Link to="/pokedex" className="link__button">
          <i className="fa-solid fa-arrow-left"></i>
          <span> pokedex</span>
        </Link>
        <ButtonSwitch />
        <button className="logout-button" onClick={removeUser}>
          Salir
        </button>
      </div>

      <Outlet />
      <Footer />
    </>
  );
};

export default PokedexLayout;
