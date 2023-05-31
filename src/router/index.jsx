import { createBrowserRouter } from 'react-router-dom';
import PokemondexLayout from '../components/Layout/PokemondexLayout';
import ProtectedRoute from '../components/common/ProtectedRoute';
import Home from '../views/Home/Home';
import Pokedex from '../views/Pokedex/Pokedex';
import PokemonDetail from '../views/PokemonDetail/PokemonDetail';
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
        index: true,
        element: <Pokedex />,
        loader: pokedexLoader,
      },
      {
        path: ':id',
        element: <PokemonDetail />,
      },
    ],
  },
]);
