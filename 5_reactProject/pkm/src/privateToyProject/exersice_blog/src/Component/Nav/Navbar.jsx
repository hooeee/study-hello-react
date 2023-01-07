import * as React from "react";
import "./Navbar.css";
function Navbar() {
  return (
        <div className="nav-main">
        <div className="home-title">3DPIT Exercise Blog</div>
          <div className="tab-main">
            <div >운동 대시보드</div>
            <div>운동 데이터 기록</div>
            <div>About</div>
          </div>
          <div className="tab-sub">
            <div>🍪</div>
            <div>🍔</div>
          </div>
      </div>
  );
}

export default Navbar;
