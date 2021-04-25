import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Lobby from './components/Lobby';
import Game from './components/Game';
import EndGame from './components/EndGame';
import ScoreBoard from './components/ScoreBoard';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { AppProvider } from './AppContext';
function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Lobby} />
            <Route path='/game' render={(props) => <Game {...props} />} />
            <Route path='/scoreboard' component={ScoreBoard} />
            <Route path='/end-game' component={EndGame} />
          </Switch>
        </div>
        <Footer />
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
