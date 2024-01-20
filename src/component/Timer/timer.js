import React, { useState, useEffect } from "react";

const formatTime = (seconds) =>
  new Date(seconds * 1000).toISOString().substr(14, 5);

const Counter = () => {
  const [count, setCount] = useState(0);
  const skipToZero = () => {
    setCount(0);
  };
  const addTime = () => {
    setCount((prevCount) => Math.min(prevCount + 10, 60));
  };
  useEffect(() => {
    let timer;
    if (count < 60) {
      timer = setTimeout(() => {
        setCount((prevCount) => Math.min(prevCount + 1, 60));
      }, 1000);
    } else {
      setCount(0);
    }
    return () => clearTimeout(timer);
  }, [count]);

  const timerStyle = {
    border: "4px solid skyblue",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    fontSize: "38px",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };

  const buttonStyle = {
    margin: "0 10px",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "skyblue",
    color: "black",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    marginLeft: "30px",
    boxShadow: "-5px 5px 5px rgba(0, 0, 0, 0.2)",
  };

  const divStyle = {
    margin: "10%",
  };

  return (
    <div className="admin" style={divStyle}>
      <center>
        <h2>Timer</h2>
      </center>
      <h1 id="timer" style={timerStyle}>
        {formatTime(count)}
      </h1>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={skipToZero}>
          ⏩ Skip
        </button>
        <button style={buttonStyle} onClick={addTime}>
          + 10 sec
        </button>
      </div>
    </div>
  );
};

export default Counter;
