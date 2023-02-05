import { useState } from "react";
import "./App.css";
import { Button } from "./stories/components/atomic/form/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button label="ddd" primary size="large"></Button>
    </div>
  );
}

export default App;
