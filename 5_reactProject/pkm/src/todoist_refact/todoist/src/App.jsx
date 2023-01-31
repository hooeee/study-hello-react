import "./App.css";
import { ModalShow } from "components/atoms";
import React from "react";
import { ModalTemplates } from "components/templates/modalTemplate/ModalTemplate";
import { LayoutTemplate, MainTemplate } from "components/templates";
import {
  useParams,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { useStore } from "./store/useStore";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutTemplate></LayoutTemplate>}>
          <Route path="manage" element={<div>관리함 페이지 입니다.</div>} />
          <Route path="today" element={<div>today 페이지 입니다.</div>} />
          <Route path="tomorrow" element={<div>tomorrow 페이지 입니다.</div>} />
          <Route
            path="filterLabel"
            element={<div>필터 라벨 페이지 입니다.</div>}
          />
          <Route path="/project/:id" element={<ProjectPage></ProjectPage>} />
          <Route path="*" element={<div>없는 페이지 입니다.</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

export function ProjectPage() {
  const { project } = useStore();
  const { id } = useParams();
  return (
    <>
      {project.length == 0 ? null : (
        <ul>
          <h1>프로젝트 이름: {project[id].name}</h1>
          <h2>컬러: {project[id].color}</h2>
          <h3>컬러 이름: {project[id].colorName}</h3>
          <h4>즐겨찾기 유무: {project[id].like == false ? "false" : "true"}</h4>
          <h4>보는 방식: {project[id].look}</h4>
        </ul>
      )}
    </>
  );
}
