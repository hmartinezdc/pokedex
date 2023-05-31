import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { userName } = useContext(UserContext);

  if (userName) return <>{children}</>;
  else return <Navigate to="/" replace />;
};

export default ProtectedRoute;
