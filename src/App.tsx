import { useState, useRef } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(0);


  const handleStart = () => {
    if (intervalRef.current) handleStop();

    const intervalID =  setInterval(() => {
      setTime(t => t + 1)
    }, 100)
  
    intervalRef.current = intervalID
  }


  const handleStop = () => {
    clearTimeout(intervalRef.current!)
  }

  return (
    <div>
      <h2>{time}</h2>

      <div style={{display: 'flex', gap: 20}}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>

      </div>
    </div>

  );
}

export default App;