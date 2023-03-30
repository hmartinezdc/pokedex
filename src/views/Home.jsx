import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router';
import { UserContext } from '../contexts/UserContext';
import './Home.css';

const Home = () => {
  const [nameValue, setNameValue] = useState('');
  const [nameError, setNameError] = useState(null);
  const { user, saveUser } = useContext(UserContext);

  const handleChange = (e) => {
    const newNameValue = e.target.value;

    setNameValue(newNameValue);
    if (newNameValue === '') setNameError('Name is required');
    else if (!/^[A-Z][a-z ]{2,}$/.test(newNameValue))
      setNameError(
        `Only letters and whitespace are allowed and must be at least 3 in length.
        `,
      );
    else setNameError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameError) {
      saveUser(nameValue);
    }
  };

  return (
    <header className="header-pokedex">
      <div className="header-img">
        <img src="/pokedex.png" alt="Pokedex" />
      </div>
      <div className="header-img2">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/15/00/50/pokeball-1594373_1280.png"
          alt="Pokedex"
        />
      </div>
      <div className="header-title">
        <h1 className="">¡Hello Trainer!</h1>
        <p>Type your name to start</p>
      </div>
      <form className="header-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          value={nameValue}
          onChange={handleChange}
        />
        <button type="submit" className="form-button">
          Start
        </button>
      </form>
      {nameError && <p className="form-button--error">{nameError}</p>}

      {user && <Navigate to="/pokedex" replace />}
    </header>
  );
};

export default Home;
