import { useState } from "react";

export function QuantityPicker() {
  const [quantity, setQuantity] = useState(0);

  function increaseQuantity() {
    setQuantity((prevState) => prevState + 1);
  }

  function decreaseQuantity() {
    setQuantity((prevState) => prevState - 1);
  }

  return (
    <div id="quantityPicker">
      <h2>Quantity Picker</h2>
      <form
        style={{
          display: "flex",
          width: "150px",
          justifyContent: "spaceBetween",
        }}
      >
        <button type="button" onClick={decreaseQuantity}>
          -
        </button>
        <p>{quantity}</p>
        <button type="button" onClick={increaseQuantity}>
          +
        </button>
      </form>
    </div>
  );
}
