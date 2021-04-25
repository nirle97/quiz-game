import React, { useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../styles/countdown.css";

function Countdown({ isTimeRunning }) {
  const onFinish = (timeLeft) => {
    if (timeLeft === 0) {
      isTimeRunning.current = false;
    }
  };
  return (
    <CountdownCircleTimer
      onFinish={onFinish}
      isPlaying
      duration={2}
      colors={[
        ["#004777", 0.33],
        ["#F7B801", 0.33],
        ["#A30000", 0.33],
      ]}
    >
      {({ remainingTime }) => {
        onFinish(remainingTime);
        return remainingTime;
      }}
    </CountdownCircleTimer>
  );
}
export default Countdown;
