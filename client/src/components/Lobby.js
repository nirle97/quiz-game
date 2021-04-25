import React, { useRef, useContext, useState } from "react";
import { AppContext } from "../AppContext";
import "../styles/lobby.css";
import Footer from "./Footer";

const axios = require("axios");

function Lobby({ history }) {
  const playerName = useRef(null);
  const { name, id, live } = useContext(AppContext);
  const [, setLives] = live;
  const [, setUserName] = name;
  const [, setUserId] = id;
  const [loginError, setLoginError] = useState("");

  async function startGame() {
    if (!playerName.current) {
      setLoginError("Don't Forget To Enter Your Name!");
      return;
    }
    setUserName(playerName.current);
    const playerId = await axios.post("/add-player", {
      name: playerName.current,
    });
    setUserId(playerId.data.playerId.id);
    setLives("❤️❤️❤️");
    history.push("/game");
  }

  function goToScoreBoard() {
    history.push("/scoreboard");
  }

  return (
    <>
      <div className="lobby-container input-group mb-3">
        <h1 className="lobby-title">QUIZ GAME</h1>
        <input
          type="text"
          className="player-input"
          placeholder="What is your name?"
          onChange={(e) => (playerName.current = e.target.value)}
        />
        <div className="lobby-buttons">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => startGame()}
          >
            Start Game
          </button>
          <button
            className="btn btn-outline-secondary score-board"
            onClick={() => goToScoreBoard()}
          >
            ScoreBoard
          </button>
        </div>
        {loginError !== "" && <div className="login-error">{loginError}</div>}
      </div>
      <Footer />
    </>
  );
}

export default Lobby;
