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
  const [doingName, setDoingName] = useState("");

  const state = useSelector((state) => {
    return state;
  });

  const handleDoingName = (e) => {
    setDoingName(e);
  };

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
        {sideBarVisible == true ? (
          <SideBar handleDoingName={handleDoingName}></SideBar>
        ) : null}
        <div>
          {state.modalData.find((f) => f.name == doingName) != null ? (
            <p
              style={{
                color: state.modalData.find((f) => f.name == doingName).color,
              }}
            >
              {state.modalData.find((f) => f.name == doingName).name}
              {state.modalData.find((f) => f.name == doingName).show}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Layout;
