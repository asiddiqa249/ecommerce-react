import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.css";
function Custom() {
  const [select, setSelect] = React.useState(60);
  const [count, setCount] = useState(60);
  const [c, setC] = useState(60);
  const [isRunning, setIsRunning] = useState(true);
  const [complete, setComplete] = useState(false);
  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };
  const buttonStyle = {
    margin: "0 10px",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#FAF6FA ",
    color: "#A82798",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    marginLeft: "30px",
    boxShadow: "-5px 5px 5px rgba(0, 0, 0, 0.2)",
  };
  const mainDiv = {
    textAlign: "start",
    marginTop: "10%",
    fontSize: "18px",
    color: "#A82798",
    border: "1px transparent #A82798",
    borderRadius: "10px",
    backgroundColor: "#FCE2F9",
    padding: "10px",
  };
  const imgDivStyle = {
    color: "#A82798",
    display: "flex",
  };
  const imgStyle = {
    marginRight: "20px",
  };
  const bottomDiv = {
    color: "#A82798",
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-evenly",
  };
  const divStyle = {
    width: "400px",
    border: "3px solid #A82798",
    padding: "10px",
    margin: "7%",
    borderRadius: "10px",
  };
  const colors = complete ? ["#DFDEDF", 0.33] : ["#A82798", 0.33];
  const renderTime = ({ remainingTime }) => {
    const displayTime = Math.max(remainingTime, 0);
    setC(displayTime);
    function formatTimer(displayTime) {
      const minutes = Math.floor(displayTime / 60);
      const remainingSeconds = displayTime % 60;
      const formattedMinutes = String(minutes).padStart(2, "0");
      const formattedSeconds = String(remainingSeconds).padStart(2, "0");
      return `${formattedMinutes}:${formattedSeconds}`;
    }
    return (
      <div className="timer">
        <div className="value">{formatTimer(displayTime)}</div>
      </div>
    );
  };
  const skipToZero = () => {
    setSelect(0);
    setIsRunning(false);
    setComplete(true);
  };
  const addTime = () => {
    setSelect((prevCount) => Math.max(prevCount + 10, 0));
  };
  useEffect(() => {
    let timer = 60;
    if (isRunning && count > 0) {
      timer = setTimeout(() => {
        setCount((prevCount) => Math.max(prevCount - 1, 0));
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [count, isRunning]);
  useEffect(() => {
    if (count === 0) {
      setIsRunning(false);
    }
  }, [count]);
  return (
    <div className="App" style={divStyle}>
      <h1>Timer</h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying={isRunning}
          duration={select}
          colors={colors}
          onComplete={() => setComplete(true)}
        >
          {renderTime}
        </CountdownCircleTimer>
        <br />
        <br />
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={skipToZero}>
            ⏩ Skip
          </button>
          <button style={buttonStyle} onClick={addTime}>
            + 10 sec
          </button>
        </div>
      </div>
      <div style={mainDiv}>
        <p>Step 2/3</p>
        <div style={imgDivStyle}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/cleaning-outlines/100/04-512.png"
            alt="..."
            width="80px"
            style={imgStyle}
          />
          <p>Cleansing</p>
        </div>
        <div style={bottomDiv}>
          <span>60 sec</span>
          <span>How to do</span>
        </div>
      </div>
    </div>
  );
}
export default Custom;