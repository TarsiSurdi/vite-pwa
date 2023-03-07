import { useEffect, useState } from "react";

export function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div id="timer">
      <h2>Timer</h2>
      <p>Time elapsed since page load: {seconds}s</p>
    </div>
  );
}
