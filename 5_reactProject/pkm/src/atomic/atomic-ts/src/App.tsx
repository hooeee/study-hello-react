import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Icon } from "@components/atomic";
import { IconButton } from "@components/molecules";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button varient={"Danger"} label={"Ddds"}>
        <Button varient={"Info"} label="aaa" />
      </Button>
      <Icon color="#ff0000" name="add" size="30px" />
      <IconButton
        onClick={() => {
          console.log("ddd");
        }}
        name="add"
      ></IconButton>
    </div>
  );
}

export default App;
