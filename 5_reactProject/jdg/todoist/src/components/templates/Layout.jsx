import React, { useState } from "react";
import BaseButton from "../atoms/BaseButton";
import SideBar from "../modules/SideBar";
import style from "./Layout.module.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Button, Navbar, Container, Nav, Dropdown } from "react-bootstrap";

export function Layout() {
  const navigate = useNavigate();

  const [sideBarVisible, SetSideBarVisible] = useState(true);

  return (
    <div className="App">
      <Navbar className={style.menu_bar} variant="dark">
        <Nav>
          <Nav.Link
            onClick={() => {
              SetSideBarVisible(!sideBarVisible);
            }}
          >
            Menu
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Nav.Link>
        </Nav>
      </Navbar>
      <div>{sideBarVisible == true ? <SideBar /> : null}</div>
    </div>
  );

  /* <div className="menu-bar">
        <BaseButton onClick={() => {}}>Menu</BaseButton>
        <BaseButton onClick={() => {}}>Home</BaseButton>
      </div>
      분리하는코드
      <div>
        왼쪽
        {sideBarVisible == true ? <SideBar /> : null}
        <div>
          오른쪽
          <Outlet />
        </div>
      </div> */
}

export default Layout;
