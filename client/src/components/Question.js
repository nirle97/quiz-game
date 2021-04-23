import React from 'react';
import '../styles/question.css';

function Question({
  Question,
  Answer1,
  Answer2,
  Answer3,
  Answer4,
  submitFunc,
  questionAnswer,
}) {
  //functions

  function clickAnswer(e) {
    questionAnswer.current = e.target.innerText;
  }

  return (
    <div className='question-container'>
      <div className='question'>{Question}</div>
      <div className='question-answers-container'>
        <div className='two-questions'>
          <span onClick={(e) => clickAnswer(e)}>{Answer1}</span>
          <span onClick={(e) => clickAnswer(e)}>{Answer2}</span>
        </div>
        <div className='two-questions'>
          <span onClick={(e) => clickAnswer(e)}>{Answer3}</span>
          <span onClick={(e) => clickAnswer(e)}>{Answer4}</span>
        </div>
      </div>
      <button onClick={() => submitFunc()}>Submit</button>
    </div>
  );
}

export default Question;
