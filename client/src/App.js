import './App.css';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Lobby from './components/Lobby';
import Game from './components/Game';
import ScoreBoard from './components/ScoreBoard';
import ErrorBoundary from './components/ErrorBoundary';

export const PlayerContext = createContext();

function App() {
  const [playerName, setPlayerName] = useState('');
  return (
    <ErrorBoundary>
      <PlayerContext.Provider value={[playerName, setPlayerName]}>
        <div className='board-outside-div'>
          <div className='board-inside-div'>
            <h1 className='title'>QUIZ GAME</h1>

            <Router>
              <Switch>
                <Route path='/' exact component={Lobby} />
                <Route
                  path='/game'
                  render={(props) => (
                    <Game {...props} playerName={playerName} />
                  )}
                />
                <Route path='/scoreboard' component={ScoreBoard} />
              </Switch>
            </Router>
          </div>
        </div>
      </PlayerContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
