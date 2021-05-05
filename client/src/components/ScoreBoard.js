import React, { useState, useEffect } from "react";
import "../styles/scoreboard.css";
const axios = require("axios");
function ScoreBoard({ history }) {
  const [playersScoreArr, setPlayersScoreArr] = useState([]);

  useEffect(() => {
    const fetchScore = async () => {
      const scoreArray = await axios.get("/score");
      setPlayersScoreArr(scoreArray.data);
    };
    fetchScore();
  }, []);

  return (
    <div>
      <a onClick={() => history.push("/")}>
        <i className="fas fa-arrow-left"></i>
      </a>
      <h1 className="score-board-title">Score Board</h1>

      <div className="board-container">
        <table className="table table-hover" id="score-table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Score</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {playersScoreArr.map((playerScore, i) => {
              return (
                <tr key={`row - ${i}`}>
                  <th scope="row">{`${i + 1}`}</th>
                  <td>{playerScore.name}</td>
                  <td>{playerScore.score}</td>
                  <td>{playerScore.updated_at.slice(0, 10)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScoreBoard;
