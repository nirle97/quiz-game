import React, { useRef, useContext, useState } from "react";
import { AppContext } from "../AppContext";
import "../styles/lobby.css";
import Footer from "./Footer";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import network from "../network";

const axios = require("axios");
function Lobby({ history }) {
  const email = useRef();
  const password = useRef();
  const { live, loggin, currentScore, isPause } = useContext(AppContext);
  const [, setPause] = isPause;
  const [, setPlayerScore] = currentScore;
  const [, setLives] = live;
  const [isLogged, setIsLogged] = loggin;
  const [loginError] = useState("");
  const [error, setError] = useState(false);

  async function startGame() {
    setLives("❤️❤️❤️");
    setPlayerScore(0);
    setPause(false);
    history.push("/game");
  }

  function goToScoreBoard() {
    history.push("/scoreboard");
  }

  const loginHandler = async () => {
    try {
      const res = await axios.post("/users/login", {
        email: email.current.value,
        password: password.current.value,
      });
      Cookies.set("accessToken", res.data.accessToken);
      Cookies.set("name", res.data.name);
      Cookies.set("id", res.data.id);
      Cookies.set("email", res.data.email);
      Cookies.set("score", res.data.score);
      setIsLogged(true);
    } catch (e) {
      setError(true);
    }
  };

  const logout = async () => {
    await network.post("auth/logout");
    setIsLogged(false);
    setError(false);
    Cookies.remove("accessToken");
    Cookies.remove("name");
    Cookies.remove("id");
    Cookies.remove("score");
    Cookies.remove("email");
  };

  return (
    <>
      <div className="lobby-container input-group mb-3">
        <h1 className="lobby-title">QUIZ GAME</h1>
        <div className="lobby-buttons">
          {isLogged ? (
            <>
              <h2 className="lobby-name">Hello {Cookies.get("name")}</h2>
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => startGame()}
              >
                Start Game
              </button>
              <button
                className="btn btn-outline-secondary score-board"
                onClick={() => goToScoreBoard()}
              >
                ScoreBoard
              </button>
              <button
                className="btn btn-outline-secondary"
                id="log-out-btn"
                onClick={logout}
              >
                Log Out
                <i class="fas fa-sign-out-alt"></i>
              </button>
            </>
          ) : (
            <>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {"Invalid Email or Password"}
                </div>
              )}
              <input
                type="email"
                className="player-input"
                placeholder="E-mail"
                ref={email}
              />
              <input
                type="password"
                className="player-input"
                placeholder="Password"
                ref={password}
              />
              <span className="sign-up-span">
                Doesn't Have an Account? <Link to="/register">Sign Up</Link>
              </span>
              <button
                className="btn btn-outline-secondary"
                id="log-in-btn"
                onClick={loginHandler}
              >
                Log In
              </button>
            </>
          )}
        </div>
        {loginError !== "" && <div className="login-error">{loginError}</div>}
      </div>
      <Footer />
    </>
  );
}

export default Lobby;
