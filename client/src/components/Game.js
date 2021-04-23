import React, { useState, useRef, useContext, useEffect } from "react";
import { PlayerContext } from "../App";
import "../styles/game.css";
import Question from "./Question";
const axios = require("axios");
function Game({ history }) {
  const [userName, setUserName] = useContext(PlayerContext);
  const [questNumber, setQuestNumber] = useState(1);
  const questionAnswer = useRef(null);
  const [questObj, setQuestObj] = useState({});

  useEffect(async () => {
    if (questNumber % 3 === 0) {
      const questObj = await axios.get("/saved-quest");
      setQuestObj(questObj);
    } else {
      const questObj = await axios.get("/gen-quest");
      setQuestObj(questObj);
    }
  }, []);

  //functions
  function submitFunc() {
    if (!questionAnswer.current) {
      alert("Cannot proceed without an answer");
      return;
    }
    alert(questionAnswer.current);
    questionAnswer.current = null;
    setQuestion("How many brothers and sisters you have?");
  }

  return (
    <div>
      <h1>{userName}</h1>
      <Question
        questObj={questObj}
        // Question={questObj.question}
        // answer={questObj.answer}
        // Answer2={answer2}
        // Answer3={answer3}
        // Answer4={answer4}
        // submitFunc={submitFunc}
        // questionAnswer={questionAnswer}
      />
      <button onClick={() => history.push("/")}>Back to Lobby</button>
    </div>
  );
}

export default Game;
