import "./App.css";
import { ModalShow } from "components/atoms";
import React from "react";
import { ModalTemplates } from "components/templates/modalTemplate/ModalTemplate";
import { LayoutTemplate, MainTemplate } from "components/templates";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
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
          <Route path="/project/:id" element={<>다음페이지 에요</>} />
          <Route path="*" element={<div>없는 페이지 입니다.</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
