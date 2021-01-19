import React, { useState, createContext } from 'react';

const UserContext = createContext([{}, () => {}]);
const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  return <UserContext.Provider value={[currentUser, setCurrentUser]}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
