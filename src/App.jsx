import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CakeContainer />
    </div>
  );
}

export default App;
