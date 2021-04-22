import React from 'react';
import '../styles/scoreboard.css';
function ScoreBoard({ history }) {
  return (
    <div>
      <h1>Score Board</h1>
      <button onClick={() => history.push('/')}>Back to Lobby</button>
    </div>
  );
}

export default ScoreBoard;
