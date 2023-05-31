import { React, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import UserForm from '../../components/home/UserForm';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const { saveUser } = useContext(UserContext);

  const handleSendName = (userNameValue) => {
    saveUser(userNameValue);
    navigate('/pokedex');
  };

  return (
    <section className="header">
      <div className="header-img">
        <p>Bienvenido a la:</p>
        <img src="/icons/pokedex.png" alt="pokedex" />
      </div>
      <div className="header-title">
        <h1>¡Hola Entrenador!</h1>
        <img className="header-Pokemon--new" src="/icons/Mew.webp" alt="Mew" />
        <p>Escribe tu nombre para empezar</p>
      </div>

      <UserForm onSendName={handleSendName} />

      {/* {userName && <Navigate to="/pokedex" replace />} */}
    </section>
  );
};

export default Home;
