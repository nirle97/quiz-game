import React from "react";
import "../styles/question.css";

function Question({ questObj }) {
  //functions
  const questStr = questObj.questionTemplate.question;
  if (questStr.includes(" Y")) {
    questStr = questStr.replace("Y", questObj.country_2);
  }
  if (questStr.includes(" X")) {
    questStr = questStr.replace("X", questObj.country_1);
  }

  function clickAnswer(e) {
    questionAnswer.current = e.target.innerText;
  }
  const optionsArr = [
    questObj.answer,
    questObj.option_1,
    questObj.option_2,
    questObj.option_3,
  ];
  if (optionsArr[2] === null) {
    optionsArr.splice(2, 1);
  }
  if (optionsArr[3] === null) {
    optionsArr.splice(3, 1);
  }
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  return (
    <div className="question-container">
      <div className="question">{questStr}</div>
      <div className="question-answers-container">
        <div className="two-questions">
          <span onClick={(e) => clickAnswer(e)}>{optionsArr[0]}</span>
          <span onClick={(e) => clickAnswer(e)}>{optionsArr[1]}</span>
        </div>
        {questObj}
        <div className="two-questions">
          <span onClick={(e) => clickAnswer(e)}>{Answer3}</span>
          <span onClick={(e) => clickAnswer(e)}>{Answer4}</span>
        </div>
      </div>
      <button onClick={() => submitFunc()}>Submit</button>
    </div>
  );
}

export default Question;
