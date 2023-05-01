import UserContext from '@/context/user';
import React
, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';


export default function PrivateRoute({ children, ...rest }) {
  const { state } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={() => {
        return state.token !== ''  ? (
          children
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
}