import "./App.css";
import { useState } from "react";
import { MainTemplate } from "components/templates";
import {
  ButtonLabel,
  LabelDropDown,
  LabelInput,
  TitleButton,
} from "components/molecules";
import { CheckBoxImage } from "components/atoms";
function App() {
  return (
    <div className="App">
      <ButtonLabel name={"즐겨찾기에 추가"}></ButtonLabel>
      <CheckBoxImage ></CheckBoxImage>
      <CheckBoxImage ></CheckBoxImage>
    </div>
  );
}

export default App;
