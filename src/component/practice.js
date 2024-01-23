import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./styles.css";

function Custom() {
  const [select, setSelect] = React.useState(10);
  const [count, setCount] = useState(60);
  const [c, setC] = useState(60);
  const [isRunning, setIsRunning] = useState(true);
  const [complete, setComplete] = useState(false);
  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };
  const renderTime = ({ remainingTime }) => {
    setC(remainingTime);
    //   if (remainingTime === 0) {
    //     return <div className="timer">Too lale...</div>;
    //   }
    //   remainingTime = "00:00";

    return (
      <div className="timer">
        <div className="value">00:{c < 10 ? `0${c}` : c}</div>
      </div>
    );
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
    marginTop: "10%",
    fontSize: "18px",
    color: "#A82798",
    border: "1px transparent #A82798",
    borderRadius: "10px",
    backgroundColor: "#FCE2F9",
    padding: "2%",
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
    border: "3px solid black",
    padding: "2%",
    margin: "7%",
    borderRadius: "10px",
  };

  const skipToZero = () => {
    setC(0);
    // setSelect(0);
    // setIsRunning(false);
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
      <h1>Timer {c}</h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          //   key={timer}
          isPlaying={isRunning}
          duration={select}
          colors={["#A82798", 0.33]}
          onComplete={() => [complete, 0]}
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
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
