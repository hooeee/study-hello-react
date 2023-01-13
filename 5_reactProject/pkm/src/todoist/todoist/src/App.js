import React from "react";
import "./App.css";
import { TitleNameInput } from "./components/organisms/TitleNameInput/TitleNameInput";
function App() {
  const item = [
    { value: "chocolate", label: "🍎 red" },
    { value: "strawberry", label: "🥏 blue" },
    { value: "vanilla", label: "🍯 yellow" },  
  ];
  return (
    <div className="App">
      <TitleNameInput labelMainName={"프로젝트 추가"} labelName={"이름"} btnName="®"></TitleNameInput>
    </div>
  );
}

export default App;
