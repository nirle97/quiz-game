import React, { useRef, useContext, useState } from "react";
import { AppContext } from "../AppContext";
import "../styles/lobby.css";
import questImage from "../question-mark-background.jpg";
const axios = require("axios");

function Lobby({ history }) {
  const playerName = useRef(null);
  const { name, id, live } = useContext(AppContext);
  const [lives, setLives] = live;
  const [userName, setUserName] = name;
  const [userId, setUserId] = id;
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
        <h1>QUIZ GAME</h1>
        <input
          type="text"
          class="form-control"
          placeholder="What is your name?"
          onChange={(e) => (playerName.current = e.target.value)}
        ></input>
        <button
          class="btn btn-outline-secondary"
          type="button"
          onClick={() => startGame()}
        >
          Start Game
        </button>
        {loginError !== "" && <div className="login-error">{loginError}</div>}
        <a className="scoreboard-title" onClick={() => history.push("/")}>
          Click Here To See Other People Results!
          <i class="fas fa-arrow-left" id="lobby-arrow"></i>
        </a>
        <button
          className="btn btn-outline-secondary score-board"
          onClick={() => goToScoreBoard()}
        >
          ScoreBoard
        </button>
      </div>
    </>
  );
}

export default Lobby;
