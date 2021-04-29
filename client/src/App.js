import React, { useContext, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Lobby from "./components/Lobby";
import Game from "./components/Game";
import EndGame from "./components/EndGame";
import ScoreBoard from "./components/ScoreBoard";
import Register from "./components/Register";
import { AppContext } from "./AppContext";
import Cookies from "js-cookie";

function App() {
  const { loggin } = useContext(AppContext);
  const [isLogged, setIsLogged] = loggin;
  useEffect(() => {
    if (Cookies.get("accessToken")) return setIsLogged(true);
  }, []);

  return (
    <div className="container">
      {!isLogged ? (
        <Switch>
          <Route path="/" exact component={Lobby} />
          <Route path="/register" exact component={Register} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact component={Lobby} />
          <Route path="/game" render={(props) => <Game {...props} />} />
          <Route path="/scoreboard" component={ScoreBoard} />
          <Route path="/end-game" component={EndGame} />
        </Switch>
      )}
    </div>
  );
}

export default App;
