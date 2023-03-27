import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div id="counter">
      <h2>Counter</h2>
      {count > 0 && (
        <p>
          You&apos;ve clicked the button {count} time{count > 1 && "s"}
        </p>
      )}
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}
