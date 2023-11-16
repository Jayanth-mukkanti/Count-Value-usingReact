
import React from 'react'
import "./App.css"
import { useState } from 'react'

function App() {

  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setIntervalId(id);
    }
  }

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTimer(0);
  };

  return (
    <>
      <div id='header'>
        <h1> Increment Number Set </h1>
        <h1> Timer: {timer} </h1>
        <div id='b1'>
          <button onClick={startTimer}> Start </button> 
          <button onClick={stopTimer}> Stop </button> 
          <button onClick={resetTimer}> Reset </button>
        </div>
      </div>
    </>
  )
}

export default App