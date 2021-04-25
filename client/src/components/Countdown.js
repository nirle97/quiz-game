import React, { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../styles/countdown.css";
import { AppContext } from "../AppContext";

function Countdown() {
  const { timerMode, timerKey, isPause } = useContext(AppContext);
  const [, setIsTimeRunning] = timerMode;
  const [key] = timerKey;
  const [pause] = isPause;
  const onFinish = (timeLeft) => {
    if (timeLeft === 0) {
      setIsTimeRunning(false);
    }
  };
  return (
    <CountdownCircleTimer
      onFinish={onFinish}
      key={key}
      isPlaying={!pause}
      duration={10}
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
