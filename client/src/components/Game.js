import React from 'react';
import '../styles/game.css';

function Game({ history, playerName }) {
  return (
    <div>
      <h1>game</h1>
      <h1>{playerName}</h1>
      <button onClick={() => history.push('/')}>Back to Lobby</button>
    </div>
  );
}

export default Game;
