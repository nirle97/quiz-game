import React, { useEffect, useState, useRef, useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/question.css";

function Question({ questObj, finsihRound, history }) {
  const [optionsArray, setOptionsArray] = useState([]);
  const playerAnswer = useRef(null);
  const { click, timerMode, isPause, currentScore } = useContext(AppContext);
  const clicked = click;
  const [isTimeRunning] = timerMode;
  const [, setPause] = isPause;
  const [, setPlayerScore] = currentScore;

  useEffect(() => {
    if (isTimeRunning === false) {
      submitQuest();
    }
  }, [isTimeRunning]);

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

    const shuffledOpt = shuffleArray(optionsArr);
    setOptionsArray([...shuffledOpt]);

    let allInputs = document.querySelectorAll("label");
    allInputs.forEach((item) => {
      if (item.classList.contains("correct-answer")) {
        item.classList.remove("correct-answer");
      }
    });
  }, [questObj]);

  const submitQuest = () => {
    if (!playerAnswer.current) return;
    setPause(true);
    clicked.current.disabled = true;
    if (isTimeRunning === true) {
      if (playerAnswer.current.defaultValue === questObj.answer) {
        setPlayerScore((prev) => prev + 100);
        finsihRound(true);
        playerAnswer.current.labels[0].classList.add("correct-answer");
      }
    }
    if (
      isTimeRunning === false ||
      playerAnswer.current.defaultValue !== questObj.answer
    ) {
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
        <tbody>
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
        </tbody>
      </table>
      {
        <button
          ref={clicked}
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
