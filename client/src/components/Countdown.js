import React, { useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../styles/countdown.css";

function Countdown() {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={20}
      colors={[
        ["#004777", 0.33],
        ["#F7B801", 0.33],
        ["#A30000", 0.33],
      ]}
    >
      {({ remainingTime }) => {
        console.log(remainingTime);
        return remainingTime;
      }}
    </CountdownCircleTimer>
  );
}
export default Countdown;
