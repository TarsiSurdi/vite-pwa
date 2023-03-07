import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div id="counter">
      <h2>Counter</h2>
      <p>You&apos;ve clicked the button {count} times</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}
