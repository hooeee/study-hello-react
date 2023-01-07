// import * as React from "react";
// import {Routes, Route, Link, useNavigate, Outlet} from "react"
// import "./Navbar.css";
// function Navbar() {
//   return (
//         <div className="nav-main">
//         <div className="home-title">3DPIT Exercise Blog</div>
//           <div className="tab-main">
//             <div >운동 대시보드</div>
//             <div>운동 데이터 기록</div>
//             <div>About</div>
//           </div>
//           <div className="tab-sub">
//             <div>🍪</div>
//             <div>🍔</div>
//           </div>
//       </div>
//   );
// }

// export default Navbar;

import * as React from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { About, Dashboard, DataWrite } from "./../..//Component/Tab/Tab.jsx";
import App from "./../../App.js";
import "./Navbar.css";
function Navbar() {
  let navigate = useNavigate();
  return (
    <div className="nav-main">
      <div
        className="home-title"
        onClick={() => {
          navigate("/");
        }}
      >
        3DPIT Exercise Blog
      </div>
      <div className="tab-main">
        <div
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          운동 대시보드
        </div>
        <div
          onClick={() => {
            navigate("/exercisewrite");
          }}
        >
          운동 데이터 기록
        </div>
        <div
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </div>
      </div>
      <div className="tab-sub">
        <div>🍪</div>
        <div>🍔</div>
      </div>
    </div>
  );
}

export default Navbar;
