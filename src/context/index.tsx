import React from "react";

import { UserContextProvider } from "./user";

const GlobalContext: React.SFC = ({ children }) => {
  return (
    <>
      <UserContextProvider>{children}</UserContextProvider>;
    </>
  );
};

export default GlobalContext;