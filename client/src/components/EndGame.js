import React, { useState, useRef, useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import "../styles/game.css";
const axios = require("axios");

function EndGame({ history }) {
  const { name, id, live } = useContext(AppContext);
  const [userId, setUserId] = id;
  const [playerScore, setPlayerScore] = useState(0);

  useEffect(async () => {
    const playerObj = await axios.get(`score/get-player/${userId}`);
    console.log(playerObj.data.playerId.id);
    setPlayerScore(playerObj.data.playerId.id);
    console.log(playerObj.data.playerId.id);
  }, []);
  return (
    <>
      <h1>Oh God You Lost</h1>
      {/* <h2>You Made {playerScore} Score</h2> */}
      <button onClick={() => history.push("/")}>Start Over</button>
    </>
  );
}
export default EndGame;
