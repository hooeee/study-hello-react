import React, { Component } from "react";
import style from "./ShowPanel.module.css";

const ShowPanel = ({ src, type }) => {
  return (
    <div className={style.contain}>
      <img src={src} />
      <div>
        <input type="checkbox" />
        {type}
      </div>
    </div>
  );
};

export default ShowPanel;
