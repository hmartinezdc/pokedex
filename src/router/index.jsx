import { createBrowserRouter } from 'react-router-dom';
import PokemondexLayout from '../components/PokemondexLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import Home from '../views/Home';
import Pokedex from '../views/Pokedex';
import PokemonDetail from '../views/PokemonDetail';
import { pokedexLoader } from './loaders/pokedexLoader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokedex',
    element: (
      <ProtectedRoute>
        <PokemondexLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: ':id',
        element: <PokemonDetail />,
      },
      {
        index: true,
        element: <Pokedex />,
        loader: pokedexLoader,
      },
    ],
  },
  {},
]);
