import React, { createContext, useEffect, useState } from 'react';

type UserType = {
  name: string;
  email: string;
  token: string;
}

type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

const DEFAULT_VALUE = {
  state: {
    name: '',
    email: '',
    token: '',
  },
  setState: (state) => {
  },
};

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

const UserContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  if (state.token) sessionStorage.setItem('USER_SESSION', JSON.stringify(state))
  useEffect(()=> {
    const hasSessions = JSON.parse(sessionStorage.getItem('USER_SESSION')) as UserType;
    console.log(hasSessions);
    if (hasSessions && hasSessions.token !== '') {
      setState(hasSessions);
    }

  }, []);
  
  return (
    <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;