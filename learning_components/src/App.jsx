import { useState } from "react";
import Counter from "./counter";

function App() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");

  const changeBrand = () => setBrand("Toyota");
  const changeModel = () => setModel("Camry");

  return (
    <div>
      <h1>My Car</h1>
      <p>Brand: {brand}</p>
      <p>Model: {model}</p>
      <button onClick={changeBrand}>Change Brand</button>
      <button onClick={changeModel}>Change Model</button>

      <Counter />
    </div>
  );
}

export default App;
