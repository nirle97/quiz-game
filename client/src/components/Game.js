import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import "../styles/game.css";
import Question from "./Question";
import "react-rater/lib/react-rater.css";
import Countdown from "./Countdown";
import Rater from "react-rater";
import network from "../network";
import Cookies from "js-cookie";

function Game({ history }) {
  const {
    live,
    click,
    currentScore,
    timerMode,
    timerKey,
    isPause,
  } = useContext(AppContext);
  const clicked = click;
  const [, setKey] = timerKey;
  const [, setIsTimeRunning] = timerMode;
  const [lives, setLives] = live;
  const [, setPause] = isPause;
  const [playerScore] = currentScore;
  const [showRating, setShowRating] = useState(false);
  const [questObj, setQuestObj] = useState({});
  const [questNumber, setQuestNumber] = useState(1);

  useEffect(() => {
    let active = true;
    const fetchQuest = async () => {
      if (questNumber % 3 === 0) {
        const questObj = await network.get("/saved-quest");
        questObj.data.question = questObj.data.questionTemplate.question;
        if (active) setQuestObj(questObj.data);
      } else {
        const questObj = await network.get("/gen-quest");
        if (active) setQuestObj(questObj.data);
      }
    };
    fetchQuest();
    return () => {
      active = false;
    };
  }, [questNumber]);

  useEffect(() => {
    if (lives === "") {
      history.push("/end-game");
    }
  }, [lives]);

  const rateQuestion = async (rating) => {
    questObj.rating = rating;
    setQuestObj(questObj);
    await network.post("/saved-quest", { questObj: questObj });
  };

  const finsihRound = async (playerAnswer) => {
    setShowRating(true);
    if (playerAnswer) {
    } else {
      setLives(lives.substring(0, lives.length - 2));
    }
  };

  const nextQuest = () => {
    setPause(false);
    clicked.current.disabled = false;
    setIsTimeRunning(true);
    setKey((prevKey) => prevKey + 1);
    setQuestNumber((prev) => prev + 1);
    setShowRating(false);
  };

  return (
    <>
      <h1 className="quiz-game-title">
        Welcome {Cookies.get("name")} Let's Play Trivia!
      </h1>
      <div className="game-panel">
        <span>Lives Left: {lives}</span>
        <span>score: {playerScore}</span>
        <div className="clock">
          <Countdown />
        </div>
      </div>
      <div className="question-block">
        <Question
          questObj={questObj}
          finsihRound={finsihRound}
          history={history}
        />
      </div>
      {showRating && (
        <>
          <div className="rate-container">
            <h2 className="rate-title">
              Please rate this question and press the "Next Question" button
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
