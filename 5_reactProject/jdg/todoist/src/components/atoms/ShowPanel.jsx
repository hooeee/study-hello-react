import React, { Component } from "react";
import style from "./ShowPanel.module.css";
import { useState } from "react";
import { useEffect } from "react";

const ShowPanel = ({ src, type, handleChecked, handleSelectedType }) => {
  const [ischecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!ischecked);
  };

  useEffect(() => {
    handleChecked(ischecked);

    if (ischecked) {
      if (type == "보드") {
        handleSelectedType("board");
      } else if (type == "목록") {
        handleSelectedType("list");
      }
    }
  }, [ischecked]);

  return (
    <div className={style.contain}>
      <img src={src} />
      <div>
        <input type="checkbox" checked={ischecked} onChange={checkHandler} />
        {type}
      </div>
    </div>
  );
};

export default ShowPanel;
