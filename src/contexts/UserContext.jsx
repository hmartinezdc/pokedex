import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(localStorage.getItem('nameUser'));

  const saveUser = (user) => {
    setUserName(user);
    localStorage.setItem('nameUser', user);
  };

  const removeUser = () => {
    setUserName(null);
    localStorage.removeItem('nameUser');
  };

  const value = { userName, saveUser, removeUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
