import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "./stories/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button danger label="ddds" size="large">
        <Button primary label="dddd" size="large">
          <Button danger label="dddd" size="large"></Button>
        </Button>
      </Button>
    </div>
  );
}

export default App;
