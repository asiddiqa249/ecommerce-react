import React, { useState, useEffect } from "react";

const formatTime = (seconds) =>
  new Date(seconds * 1000).toISOString().substr(14, 5);

const Counter = () => {
  const totalTime = 60;
  const [count, setCount] = useState(60);
  const [isRunning, setIsRunning] = useState(true);
  const [borderColor, setBorderColor] = useState("#D7BDE2");
  const [borderOpacity, setBorderOpacity] = useState(1);

  const skipToZero = () => {
    setCount(0);
    setIsRunning(false);
  };

  const addTime = () => {
    setCount((prevCount) => Math.max(prevCount + 10, 0));
  };

  useEffect(() => {
    let timer;
    if (isRunning && count > 0) {
      timer = setTimeout(() => {
        setCount((prevCount) => Math.max(prevCount - 1, 0));
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [count, isRunning]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Decrease opacity over time
      setBorderOpacity((prevOpacity) => Math.max(prevOpacity - 0.1, 0));
    }, 1000); // Change the interval as needed (1000ms = 1 second)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  useEffect(() => {
    if (count === 0) {
      setIsRunning(false);
    }
  }, [count]);

  const timerStyle = {
    border: `4px solid ${borderColor}`,
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    fontSize: "38px",
    boxShadow: "0px 0px 3px 2px rgba(0, 0, 0, 0.2)",
    background: `conic-gradient(${borderColor} ${
      (count / totalTime) * 100
    }%, transparent ${(count / totalTime) * 100}%)`,
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
    backgroundColor: "#FAF6FA ",
    color: "#A82798",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    marginLeft: "30px",
    boxShadow: "-5px 5px 5px rgba(0, 0, 0, 0.2)",
  };
  const divStyle = {
    width: "400px",
    border: "3px solid black",
    padding: "2%",
    margin: "7%",
    borderRadius: "10px",
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

  return (
    <>
      <div className="admin" style={divStyle}>
        <center>
          <h2>Timer</h2>
        </center>
        <div
          className="your-component"
          // style={{ border: `2px solid rgba(0, 0, 0, ${borderOpacity})` }}
        >
          <h1 id="timer" style={timerStyle}>
            {formatTime(count)}
          </h1>
        </div>

        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={skipToZero}>
            ⏩ Skip
          </button>
          <button style={buttonStyle} onClick={addTime}>
            + 10 sec
          </button>
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
    </>
  );
};

export default Counter;
