import React, { useState, createContext, useRef } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [lives, setLives] = useState("❤️❤️❤️");
  const clicked = useRef();
  const [key, setKey] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [isTimeRunning, setIsTimeRunning] = useState(true);

  return (
    <AppContext.Provider
      value={{
        name: [userName, setUserName],
        id: [userId, setUserId],
        live: [lives, setLives],
        click: clicked,
        currentScore: [playerScore, setPlayerScore],
        timerMode: [isTimeRunning, setIsTimeRunning],
        timerKey: [key, setKey],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
