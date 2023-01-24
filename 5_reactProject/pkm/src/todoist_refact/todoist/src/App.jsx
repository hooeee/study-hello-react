import "./App.css";
import { ModalShow } from "components/atoms";
import React from "react";
import { ModalTemplates } from "components/templates/modalTemplate/ModalTemplate";
import { MainTemplate } from "components/templates";
function App() {

  return (
    <div className="App">
      <ModalTemplates></ModalTemplates>
      <MainTemplate></MainTemplate>
    </div>
  );
}

export default App;
