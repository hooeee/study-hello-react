import React, { Component } from "react";
import style from "./ShowPanel.module.css";
import { useState } from "react";
import { useEffect } from "react";

const ShowPanel = ({ src, type, checked, handleSelectedType }) => {
  const [selectedType, setSelectedType] = useState();

  const onSelectedType = () => {
    if (checked) {
      if (type == "보드") {
        setSelectedType("board");
      } else if (type == "목록") {
        setSelectedType("list");
      }
    }
  };

  useEffect(() => {
    onSelectedType();
    handleSelectedType(selectedType);
  }, [selectedType]);

  return (
    <div className={style.contain}>
      <img src={src} />
      <div>
        <input type="checkbox" checked={checked} />
        {type}
      </div>
    </div>
  );
};

export default ShowPanel;
