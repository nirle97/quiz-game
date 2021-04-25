import React, { useEffect, useState, useRef, useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/question.css";
const axios = require("axios");

function Question({ questObj, finsihRound, history }) {
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
  }

  useEffect(() => {
    const optionsArr = [
      questObj.answer,
      questObj.option_1,
      questObj.option_2,
      questObj.option_3,
    ];
    console.log(questObj.answer);
    const shuffledOpt = shuffleArray(optionsArr);
    setOptionsArray([...shuffledOpt]);

    let allInputs = document.querySelectorAll("label");
    allInputs.forEach((item) => {
      if (item.classList.contains("correct-answer")) {
        item.classList.remove("correct-answer");
      }
    });
  }, [questObj]);

  const submitQuest = async () => {
    if (playerAnswer.current.defaultValue === questObj.answer) {
      finsihRound(true);
      playerAnswer.current.labels[0].classList.add("correct-answer");
    } else {
      const allInputs = document.querySelectorAll("label");
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
      <a onClick={() => history.push("/")}>
        <i className="fas fa-arrow-left" id="arrow-in-game"></i>
      </a>
      <h2 className="question-title">{questObj.question}</h2>
      <table
        className="question-answers-container table table-hover"
        onChange={(e) => clickAnswer(e)}
      >
        <tr>
          <td>
            <input
              type="radio"
              name="option"
              id="option0"
              value={optionsArray[0]}
            />
            <label htmlFor="option0">{optionsArray[0]}</label>
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              name="option"
              id="option1"
              value={optionsArray[1]}
            />
            <label id="option1" htmlFor="option1">
              {optionsArray[1]}
            </label>
            <br />
          </td>
        </tr>
        {questObj.option_2 !== null && (
          <>
            <tr>
              <td>
                <input
                  type="radio"
                  name="option"
                  id="option2"
                  value={optionsArray[2]}
                />
                <label htmlFor="option2">{optionsArray[2]}</label>
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  name="option"
                  id="option3"
                  value={optionsArray[3]}
                />
                <label htmlFor="option3">{optionsArray[3]}</label>
              </td>
            </tr>
          </>
        )}
      </table>
      {
        <button
          className="btn btn-outline-secondary game-btn"
          onClick={submitQuest}
        >
          Submit
        </button>
      }
    </div>
  );
}

export default Question;
