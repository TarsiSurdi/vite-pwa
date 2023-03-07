import { ChangeEvent, useState } from "react";

export function Slider() {
  const [value, setValue] = useState(50);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const {value} = event.target;
    setValue(Number(value));
  }

  return(
    <div id="slider">
      <h2>Slider</h2>
      
      <input 
        type="range"
        min="0"
        max="100"
        step="5"
        value={value}
        onChange={handleChange}
      />
      <p>Value: {value}</p>
    </div>
  );
}