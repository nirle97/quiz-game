import React, { useState, useRef, useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import "../styles/game.css";
import Question from "./Question";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Countdown from "./Countdown";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const axios = require("axios");

function Game({ history }) {
  const { name, id, live, click, currentScore } = useContext(AppContext);
  const clicked = click;
  const isTimeRunning = useRef(true);
  const [userName, setUserName] = name;
  const [userId, setUserId] = id;
  const [lives, setLives] = live;
  const [playerScore, setPlayerScore] = currentScore;
  const [showRating, setShowRating] = useState(false);
  const [questObj, setQuestObj] = useState({});
  const [questNumber, setQuestNumber] = useState(1);

  useEffect(async () => {
    if (questNumber % 3 === 0) {
      const questObj = await axios.get("/saved-quest");
      setQuestObj(questObj.data);
    } else {
      const questObj = await axios.get("/gen-quest");
      setQuestObj(questObj.data);
    }
    await getCurrentScore();
  }, [questNumber]);

  useEffect(() => {
    if (lives === "") {
      history.push("/end-game");
    }
  }, [lives]);

  const getCurrentScore = async () => {
    let result = await axios.get(`/score/get-player/${userId}`);
    result = result.data;
    setPlayerScore(result.score);
  };
  const ratePlayer = async (playerId) => {
    await axios.put(`/score/${userId}/add-score`);
  };

  const rateQuestion = async (rating) => {
    questObj.rating = rating;
    setQuestObj(questObj);
    await axios.post("/saved-quest", { questObj: questObj });
  };

  const finsihRound = async (playerAnswer) => {
    setShowRating(true);
    if (playerAnswer) {
      await ratePlayer(userId);
      await getCurrentScore();
    } else {
      setLives(lives.substring(0, lives.length - 2));
    }
  };

  const nextQuest = () => {
    clicked.current.disabled = false;
    isTimeRunning.current = true;
    setQuestNumber((prev) => prev + 1);
    setShowRating(false);
  };

  return (
    <>
      <h1 className="quiz-game-title">Welcome {userName} Let's Play Trivia!</h1>
      <div className="game-panel">
        <span>Lives Left: {lives}</span>
        <span>score: {playerScore}</span>
        <div className="clock">
          <Countdown isTimeRunning={isTimeRunning} />
        </div>
      </div>
      <div className="question-block">
        <Question
          isTimeRunning={isTimeRunning}
          questObj={questObj}
          finsihRound={finsihRound}
          history={history}
        />
      </div>
      {showRating && (
        <>
          <div className="rate-container">
            <h2 className="rate-title">
              Please rate this question and press the "Next question" button
              below
            </h2>
            <div className="rate-stars">
              <Rater
                total={5}
                onRate={(rating) => rateQuestion(rating.rating)}
              />
            </div>
            <button
              onClick={nextQuest}
              className="btn btn-outline-secondary next-quest-btn"
            >
              Next Question
            </button>
          </div>
        </>
      )}
    </>
  );
}
export default Game;
