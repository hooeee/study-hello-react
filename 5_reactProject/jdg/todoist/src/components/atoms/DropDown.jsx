import React, { Component } from "react";
import style from "./DropDown.module.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import colorList from "../../datas/color";
import { useState } from "react";
import { useEffect } from "react";

const ColorDropdown = ({ handleSelectedColor }) => {
  const [content, setContent] = useState();

  const onChangeHanlder = (e) => {
    setContent(e.currentTarget.value);
  };

  useEffect(() => {
    handleSelectedColor(content);
  }, [content]);

  return (
    <select onChange={onChangeHanlder} value={content}>
      {colorList.map((item) => (
        <option value={item.code} key={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default ColorDropdown;
