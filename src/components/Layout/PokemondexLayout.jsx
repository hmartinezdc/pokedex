import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import './PokemondexLayout.css';

const PokedexLayout = () => {
  const { removeUser } = useContext(UserContext);

  return (
    <>
      {/* Aqui va ir mi boton de darkmode y el footer o algun componente que quiero que se vea en las ruta Layout*/}
      <button className="logout-button" onClick={removeUser}>
        Salir
      </button>

      <Outlet />
    </>
  );
};

export default PokedexLayout;
