import React, { useState, createContext, useRef } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [lives, setLives] = useState("❤️❤️❤️");
  const [clicked, setClicked] = useState(false);

  return (
    <AppContext.Provider
      value={{
        name: [userName, setUserName],
        id: [userId, setUserId],
        live: [lives, setLives],
        click: [clicked, setClicked],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
