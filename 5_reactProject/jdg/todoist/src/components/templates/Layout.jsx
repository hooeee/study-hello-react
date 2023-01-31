import { useState } from "react";
import MenuButton from "../atoms/MenuButton";
import HomeButton from "../atoms/HomeButton";
import SideBar from "../modules/SideBar";

export function Layout() {
  return (
    <div className="App">
      <div className="menu-bar">
        <MenuButton />
        <HomeButton />
      </div>
      <SideBar />
    </div>
  );
}

export default Layout;
