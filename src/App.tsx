import React from 'react';
import Routes from './routes';
import GlobalContext from './context';
export default () => {
  return (
    <>
      <GlobalContext>
        <Routes />
      </GlobalContext>
    </>
  );
}