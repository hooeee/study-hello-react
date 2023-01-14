import React from "react";
import "./App.css";
import { ProjectAddTitle } from "./components/organisms/ProjectAddTitle";
import { FavoriteCheck } from "./components/molecules/FavoriteCheck";
import { ProjectAddTemplate } from "./components/templates/ProjectAddTemplate";
import { ProjectAddPage } from "./components/pages/ProjectAddPage";
import { Img } from "./components/atoms/form/Img";
function App() {
  return (
    <div className="App">
      <ProjectAddPage></ProjectAddPage>
    </div>
  );
}

export default App;
