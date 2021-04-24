import React, { useEffect, useState, useRef, useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/question.css";
const axios = require("axios");

function Question({ questObj, finsihRound }) {
  const [optionsArray, setOptionsArray] = useState([]);
  const playerAnswer = useRef(null);
  const correctAnswer = useRef("option");
  const { id, live, click } = useContext(AppContext);
  const [userId, setUserId] = id;
  const [lives, setLives] = live;
  const [clicked, setClicked] = click;

  function shuffleArray(array) {
    if (array[2] === null) {
      array.splice(2, 1);
    }
    if (array[2] === null) {
      array.splice(2, 1);
    }
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function clickAnswer(e) {
    playerAnswer.current = e.target;
    console.log(playerAnswer.current);
  }

  useEffect(() => {
    const optionsArr = [
      questObj.answer,
      questObj.option_1,
      questObj.option_2,
      questObj.option_3,
    ];
    const shuffledOpt = shuffleArray(optionsArr);
    setOptionsArray([...shuffledOpt]);
  }, [questObj]);

  const submitQuest = async () => {
    setClicked(true);
    if (playerAnswer.current.innerText === questObj.answer) {
      finsihRound(true);
      playerAnswer.current.setAttribute("class", "correct-answer");
    } else {
      const allInputs = document.querySelectorAll("label");
      console.log(allInputs[0]);
      allInputs.forEach((item) => {
        if (item.innerText === questObj.answer) {
          item.setAttribute("class", "correct-answer");
        }
      });
      finsihRound(false);
    }
  };

  return (
    <div className="question-container">
      <div className="question-title">{questObj.question}</div>
      <div
        className="question-answers-container"
        onChange={(e) => clickAnswer(e)}
      >
        <input type="radio" name="option" value={optionsArray[0]} />
        <label for={optionsArray[0]}>{optionsArray[0]}</label>
        <br />
        <input type="radio" name="option" value={optionsArray[1]} />
        <label for={optionsArray[1]}>{optionsArray[1]}</label>
        <br />
        {questObj.option_2 !== null && (
          <>
            <input type="radio" name="option" value={optionsArray[2]} />
            <label for={optionsArray[2]}>{optionsArray[2]}</label>
            <br />
            <input type="radio" name="option" value={optionsArray[3]} />
            <label for={optionsArray[3]}>{optionsArray[3]}</label>
          </>
        )}
      </div>
      {!clicked && <button onClick={submitQuest}>Submit</button>}
    </div>
  );
}

export default Question;
