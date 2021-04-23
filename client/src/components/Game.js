import React, { useState, useRef } from 'react';
import '../styles/game.css';
import Question from './Question';

function Game({ history, playerName }) {
  const questionAnswer = useRef(null);
  const [question, setQuestion] = useState('How old are you?');
  const [answer1, setAnswer1] = useState('17');
  const [answer2, setAnswer2] = useState('21');
  const [answer3, setAnswer3] = useState('25');
  const [answer4, setAnswer4] = useState('42');

  //functions
  function submitFunc() {
    if (!questionAnswer.current) {
      alert('Cannot proceed without an answer');
      return;
    }
    alert(questionAnswer.current);
    questionAnswer.current = null;
    setQuestion('How many brothers and sisters you have?');
    setAnswer1('0');
    setAnswer2('1');
    setAnswer3('2');
    setAnswer4('3');
  }

  return (
    <div>
      <h1>{playerName}</h1>
      <Question
        Question={question}
        Answer1={answer1}
        Answer2={answer2}
        Answer3={answer3}
        Answer4={answer4}
        submitFunc={submitFunc}
        questionAnswer={questionAnswer}
      />
      <button onClick={() => history.push('/')}>Back to Lobby</button>
    </div>
  );
}

export default Game;
