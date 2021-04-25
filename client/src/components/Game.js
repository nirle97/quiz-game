import React, { useState, useRef, useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import "../styles/game.css";
import Question from "./Question";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const axios = require("axios");

function Game({ history }) {
  const { name, id, live, click } = useContext(AppContext);
  const [clicked, setClicked] = click;
  const [userName, setUserName] = name;
  const [userId, setUserId] = id;
  const [lives, setLives] = live;
  const [showRating, setShowRating] = useState(false);
  const [questObj, setQuestObj] = useState({});
  const [questNumber, setQuestNumber] = useState(1);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);

  useEffect(async () => {
    if (questNumber % 3 === 0) {
      const questObj = await axios.get("/saved-quest");
      setQuestObj(questObj.data);
    } else {
      const questObj = await axios.get("/gen-quest");
      setQuestObj(questObj.data);
    }
  }, [questNumber]);

  useEffect(() => {
    if (lives === "") {
      history.push("/end-game");
    }
  }, [lives]);

  const ratePlayer = async (playerId) => {
    await axios.put(`/score/${userId}/add-score`);
  };

  const rateQuestion = async (rating) => {
    questObj.rating = rating;
    setQuestObj(questObj);
    await axios.post("/saved-quest", { questObj: questObj });
  };

  const finsihRound = (playerAnswer) => {
    setShowRating(true);
    if (playerAnswer) {
      ratePlayer(userId);
    } else {
      setLives(lives.substring(0, lives.length - 2));
    }
  };

  const nextQuest = () => {
    setClicked(false);
    setQuestNumber((prev) => prev + 1);
    setShowRating(false);
  };

  return (
    <>
      <h1 className="user-name">{userName}</h1>
      <span>Lives Left: {lives}</span>
      <span>score: {playerScore}</span>
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
            <h2>
              Please rate this question and press the "Next question" button
              below
            </h2>
            <Rater total={5} onRate={(rating) => rateQuestion(rating.rating)} />
            <button onClick={nextQuest}>Next question</button>
          </div>
        </>
      )}
    </>
  );
}
export default Game;
