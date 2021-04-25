import React, { useRef, useState, useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../styles/countdown.css";
import { AppContext } from "../AppContext";

function Countdown() {
  const { timerMode, timerKey } = useContext(AppContext);
  const [isTimeRunning, setIsTimeRunning] = timerMode;
  const [key, setKey] = timerKey;
  const onFinish = (timeLeft) => {
    if (timeLeft === 0) {
      setIsTimeRunning(false);
    }
  };
  return (
    <CountdownCircleTimer
      onFinish={onFinish}
      key={key}
      isPlaying
      duration={2}
      colors={[
        ["#004777", 0.33],
        ["#F7B801", 0.33],
        ["#A30000", 0.33],
      ]}
      // onComplete={() => [true]}
    >
      {({ remainingTime }) => {
        onFinish(remainingTime);
        return remainingTime;
      }}
    </CountdownCircleTimer>
  );
}
export default Countdown;
