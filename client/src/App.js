import "./App.css";
import { Switch, Route } from "react-router-dom";
import Lobby from "./components/Lobby";
import Game from "./components/Game";
import EndGame from "./components/EndGame";
import ScoreBoard from "./components/ScoreBoard";
import ErrorBoundary from "./components/ErrorBoundary";
import { AppProvider } from "./AppContext";
function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Lobby} />
            <Route path="/game" render={(props) => <Game {...props} />} />
            <Route path="/scoreboard" component={ScoreBoard} />
            <Route path="/end-game" component={EndGame} />
          </Switch>
        </div>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
