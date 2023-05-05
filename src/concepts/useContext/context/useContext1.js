import React, { useContext } from "react";

const initialState = {
  firstName: "srilekha",
  lastName: "Nagulakonda",
  email: "srilekha@gmail.com",
};
export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
};
