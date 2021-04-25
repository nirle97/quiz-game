import React, { useState, useRef, useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import "../styles/game.css";
const axios = require("axios");

function EndGame({ history }) {
  const { name, id, live, currentScore } = useContext(AppContext);
  const [playerScore, setPlayerScore] = currentScore;

  return (
    <>
      <h1>Oh God You Lost</h1>
      <h2>You Have {playerScore} Score</h2>
      <button onClick={() => history.push("/")}>Start Over</button>
    </>
  );
}
export default EndGame;
