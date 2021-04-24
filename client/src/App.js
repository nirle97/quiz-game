import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lobby from "./components/Lobby";
import Game from "./components/Game";
import ScoreBoard from "./components/ScoreBoard";
import ErrorBoundary from "./components/ErrorBoundary";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <div className="board-outside-div">
          <div className="board-inside-div">
            <h1 className="title">QUIZ GAME</h1>
            <Switch>
              <Route path="/" exact component={Lobby} />
              <Route path="/game" render={(props) => <Game {...props} />} />
              <Route path="/scoreboard" component={ScoreBoard} />
            </Switch>
          </div>
        </div>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
