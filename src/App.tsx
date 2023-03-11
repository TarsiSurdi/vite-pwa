import { Slider, QuantityPicker } from "./components";
import { Counter, Timer, Todo } from "./classComponents";

function App() {
  return (
    <div className="App">
      <h1>Vite PWA Testing</h1>
      <Counter />
      <Timer />
      <Todo />
      <Slider />
      <QuantityPicker />
    </div>
  );
}

export default App;
