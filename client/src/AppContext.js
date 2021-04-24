import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  return (
    <AppContext.Provider
      value={{ name: [userName, setUserName], id: [userId, setUserId] }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
