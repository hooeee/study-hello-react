import React, { useState } from "react";
import BaseButton from "../atoms/BaseButton";
import SideBar from "../modules/SideBar";
import style from "./Layout.module.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Button, Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

export function Layout() {
  const navigate = useNavigate();

  const [sideBarVisible, SetSideBarVisible] = useState(true);

  const state = useSelector((state) => {
    return state;
  });

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
      <div>
        {sideBarVisible == true ? <SideBar /> : null}
        <div>
          <p style={{ color: state.modalData.color }}>
            {state.modalData.name} {state.modalData.show}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Layout;
