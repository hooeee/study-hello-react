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
        {/* sideBar에서 클릭한 state의 name이 같은 데이터만 가져와야함. */}
        <div>
          {state.modalData.map((a, i) => (
            <p key={i} style={{ color: state.modalData[i].color }}>
              {state.modalData[i].name} {state.modalData[i].show}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layout;
