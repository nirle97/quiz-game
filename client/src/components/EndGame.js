import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import "../styles/game.css";
import network from "../network";
function EndGame({ history }) {
  const { currentScore } = useContext(AppContext);
  const [playerScore] = currentScore;

  useEffect(() => {
    network.put("/score/add-score", { score: playerScore });
  }, []);

  return (
    <div className="endgame-container">
      <h2 className="endgame-text">You Made {playerScore} Points</h2>
      <h2 className="endgame-text">Thanks for playing </h2>
      <h2 className="endgame-text"> And Good Luck Next Time !</h2>
      <button className="start-over-button" onClick={() => history.push("/")}>
        Start Over
      </button>
    </div>
  );
}
export default EndGame;
