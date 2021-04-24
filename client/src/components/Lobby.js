import React, { useRef, useContext, useState } from "react";
import { AppContext } from "../AppContext";
import "../styles/lobby.css";
const axios = require("axios");

function Lobby({ history }) {
  const playerName = useRef(null);
  const { name, id } = useContext(AppContext);
  const [userName, setUserName] = name;
  const [userId, setUserId] = id;
  const [loginError, setLoginError] = useState("");

  //functions
  async function startGame() {
    if (!playerName.current) {
      setLoginError("Cannot start the game with a blank name");
      return;
    }
    setUserName(playerName.current);
    const playerId = await axios.post("/add-player", {
      name: playerName.current,
    });
    setUserId(playerId);
    history.push("/game");
  }

  function goToScoreBoard() {
    history.push("/scoreboard");
  }

  return (
    <>
      <div className="lobby-container">
        <input
          type="text"
          placeholder="What is your name?"
          onChange={(e) => (playerName.current = e.target.value)}
        />
        <button onClick={() => startGame()}>Start</button>
      </div>
      <button className="score-board" onClick={() => goToScoreBoard()}>
        ScoreBoard
      </button>
      <div>{loginError}</div>
    </>
  );
}

export default Lobby;
