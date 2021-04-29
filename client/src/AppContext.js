import React, { useState, createContext, useRef } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [lives, setLives] = useState("❤️❤️❤️");
  const clicked = useRef();
  const [key, setKey] = useState(0);
  const [pause, setPause] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [isTimeRunning, setIsTimeRunning] = useState(true);

  return (
    <AppContext.Provider
      value={{
        loggin: [isLogged, setIsLogged],
        name: [userName, setUserName],
        id: [userId, setUserId],
        live: [lives, setLives],
        click: clicked,
        currentScore: [playerScore, setPlayerScore],
        timerMode: [isTimeRunning, setIsTimeRunning],
        timerKey: [key, setKey],
        isPause: [pause, setPause],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
