import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "components/organisms";
import { useSelector, } from "react-redux";
import React from "react";
export function Layout() {
  const { sidebar } = useSelector((state) => {
    return state;
  });
  return (
    <>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.center}>
        <div
          className={
            sidebar
              ? `${style.sidebar} ${style.sidebar_open}`
              : `${style.sidebar} ${style.sidebar_close}`
          }
        >
          <Sidebar />
        </div>
        <div className={style.main}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
