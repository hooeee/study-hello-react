import React, { Component } from "react";
import style from "./ShowPanel.module.css";
import { useState } from "react";
import { useEffect } from "react";

const ShowPanel = ({ src, type, handleChecked }) => {
  const [selectedType, setSelectedType] = useState("");

  // const onSelectedType = () => {
  //   if (ischecked) {
  //     if (type == "보드") {
  //       setSelectedType("board");
  //     } else if (type == "목록") {
  //       setSelectedType("list");
  //     }
  //   }
  // };

  const [ischecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!ischecked);
  };

  useEffect(() => {
    // onSelectedType();
    handleChecked(ischecked);
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
