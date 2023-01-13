import React from "react";
import "./App.css";
import { ProjectAddTitle } from "./components/organisms/ProjectAddTitle";
import { FavoriteCheck } from "./components/molecules/FavoriteCheck";
import { ProjectAddTemplate } from "./components/templates/ProjectAddTemplate";
import { ProjectAddPage } from "./components/pages/ProjectAddPage";
import { Img } from "./components/atoms/form/Img";
function App() {
  const item = [
    { value: "chocolate", label: "🍎 red" },
    { value: "strawberry", label: "🥏 blue" },
    { value: "vanilla", label: "🍯 yellow" },
  ];
  return (
    <div className="App">
      <ProjectAddPage
        labelMainName={"프로젝트 추가"}
        btnName={"®"}
        NameLabelName={"이름"}
        ColorLabelName={"색상"}
        FavoriteLabelName={"즐겨찾기에 추가"}
        items={item}
        ViewName={"보기"}
        color1={"red"}
        color2={"blue"}
        ViewLabelName1={"목록"}
        ViewLabelName2={"보드"}
        DetaillabelName1={
          "보기는 공유 프로젝트에서 팀 멤버들 간에 동기화됩니다."
        }
        DetaillabelName2={"자세히 알아보기"}
        cancelName={"취소"}
        addName={"추가"}
      ></ProjectAddPage>
    </div>
  );
}

export default App;
