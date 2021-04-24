import React, { useEffect, useState, useRef } from "react";
import "../styles/question.css";

function Question({ questObj, finsihRound }) {
  const [optionsArray, setOptionsArray] = useState([]);
  const [lastAnswer, setLastAnswer] = useState(null);
  const playerAnswer = useRef(false);

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
    setLastAnswer(e.target.innerText);
    if (questObj.answer === lastAnswer) {
      playerAnswer.current = true;
    } else {
      playerAnswer.current = false;
    }
  }
  useEffect(() => {
    const optionsArr = [
      questObj.answer,
      questObj.option_1,
      questObj.option_2,
      questObj.option_3,
    ];
    const shuffledOpt = shuffleArray(optionsArr);
    console.log(shuffledOpt);
    setOptionsArray([...shuffledOpt]);
  }, [questObj]);

  return (
    <div className="question-container">
      <div className="question-title">{questObj.question}</div>
      <div className="question-answers-container">
        <ol className="options">
          <li onClick={(e) => clickAnswer(e)}>{optionsArray[0]}</li>
          <li onClick={(e) => clickAnswer(e)}>{optionsArray[1]}</li>
          {questObj.option_2 !== null && (
            <>
              <li onClick={(e) => clickAnswer(e)}>{optionsArray[2]}</li>
              <li onClick={(e) => clickAnswer(e)}>{optionsArray[3]}</li>
            </>
          )}
        </ol>
      </div>
      <button onClick={() => lastAnswer && finsihRound(playerAnswer.current)}>
        Submit
      </button>
    </div>
  );
}

export default Question;
