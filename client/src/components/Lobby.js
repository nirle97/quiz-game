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
        <h1 className="lobby-title">QUIZ GAME</h1>
        <input
          // <<<<<<< HEAD
          //           type="text"
          //           className="form-control"
          //           placeholder="What is your name?"
          //           onChange={(e) => (playerName.current = e.target.value)}
          //         ></input>
          //         <button
          //           className="btn btn-outline-secondary"
          //           type="button"
          //           onClick={() => startGame()}
          //         >
          //           Start Game
          //         </button>
          //         {loginError !== "" && <div className="login-error">{loginError}</div>}
          //         <a className="scoreboard-title" onClick={() => history.push("/")}>
          //           Click Here To See Other People Results!
          //           <i className="fas fa-arrow-left" id="lobby-arrow"></i>
          //         </a>
          //         <button
          //           className="btn btn-outline-secondary score-board"
          //           onClick={() => goToScoreBoard()}
          //         >
          //           ScoreBoard
          //         </button>
          // =======
          type="text"
          className="player-input"
          placeholder="What is your name?"
          onChange={(e) => (playerName.current = e.target.value)}
        />
        <div className="lobby-buttons">
          <button
            class="btn btn-outline-secondary"
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
        {/* <a className='scoreboard-title' onClick={() => history.push('/')}>
          Click Here To See Other People Results!
          <i class='fas fa-arrow-left' id='lobby-arrow'></i>
        </a> */}
        {/* >>>>>>> 76e13c6a7cf0fc828368577f318929220426ec6d */}
      </div>
    </>
  );
}

export default Lobby;
