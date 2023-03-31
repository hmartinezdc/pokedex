import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import { UserContext } from '../contexts/UserContext';

const PokedexLayout = () => {
  const { removeUser } = useContext(UserContext);

  return (
    <div>
      <button className="logout-button" onClick={removeUser}>
        Salir
      </button>
      <Outlet />
    </div>
  );
};

export default PokedexLayout;
