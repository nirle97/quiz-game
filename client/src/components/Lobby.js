import React, { useRef, useContext } from 'react';
import { PlayerContext } from '../App';
import '../styles/lobby.css';

function Lobby({ history }) {
  const playerName = useRef(null);
  const [userName, setUserName] = useContext(PlayerContext);
  function startGame() {
    setUserName(playerName.current);
    history.push('/game');
  }
  function goToScoreBoard() {
    history.push('/scoreboard');
  }

  return (
    <>
      <h1>Welcome to the QUIZ GAME</h1>
      <input
        type='text'
        onChange={(e) => (playerName.current = e.target.value)}
      />
      <button onClick={() => startGame()}>Start</button>
      <button onClick={() => goToScoreBoard()}>ScoreBoard</button>
    </>
  );
}

export default Lobby;
