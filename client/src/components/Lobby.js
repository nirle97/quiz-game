import React, { useRef, useContext, useState } from 'react';
import { PlayerContext } from '../App';
import '../styles/lobby.css';

function Lobby({ history }) {
  const playerName = useRef(null);
  const [userName, setUserName] = useContext(PlayerContext);
  const [loginError, setLoginError] = useState('');

  //functions
  function startGame() {
    if (!playerName.current) {
      setLoginError('Cannot start the game with a blank name');
      return;
    }
    setUserName(playerName.current);
    history.push('/game');
  }
  function goToScoreBoard() {
    history.push('/scoreboard');
  }

  return (
    <>
      <div className='input-and-start-button-div'>
        <input
          type='text'
          placeholder='What is your name?'
          onChange={(e) => (playerName.current = e.target.value)}
        />
        <button onClick={() => startGame()}>Start</button>
      </div>
      <button className='score-board' onClick={() => goToScoreBoard()}>
        ScoreBoard
      </button>
      <div>{loginError}</div>
    </>
  );
}

export default Lobby;
