import React, { useState, useRef, useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import "../styles/game.css";
import Question from "./Question";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
// import Rater from "./Rater";
const axios = require("axios");

function Game({ history }) {
  const { name, id } = useContext(AppContext);
  const [userName, setUserName] = name;
  const [userId, setUserId] = id;
  const [showRating, setShowRating] = useState(false);
  const [questObj, setQuestObj] = useState({});
  const [lives, setLives] = useState(3);
  const [questNumber, setQuestNumber] = useState(1);
  // const [nextQuest, setNextQuest ] = useState(null)

  useEffect(async () => {
    if (questNumber % 3 === 0) {
      const questObj = await axios.get("/saved-quest");
      setQuestObj(questObj.data);
    } else {
      const questObj = await axios.get("/gen-quest");
      setQuestObj(questObj.data);
    }
  }, [questNumber]);

  const ratePlayer = async (playerId) => {
    await axios.put("/score/:id/add-score", {
      id: playerId,
    });
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
      setLives((prev) => prev - 1);
    }
  };

  return (
    <>
      <div>
        <h1>{userName}</h1>
        <Question questObj={questObj} finsihRound={finsihRound} />
        <button onClick={() => history.push("/")}>Back to Lobby</button>
      </div>
      {showRating && (
        <div>
          <h2>
            {" "}
            Please rate this question and press the "Next question" button below
          </h2>
          <Rater total={5} onRate={(rating) => rateQuestion(rating.rating)} />
          {/* <button onClick={() => setQuestNumber((prev) => prev + 1)}>Next question</button> */}
        </div>
      )}
    </>
  );
}
// rating={} interactive={} onRate={{({rating}) => {}}} onRating={}
export default Game;
