import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import colorList from "../../datas/color";

const ColorDropdown = ({ handleSelectedColor, selectedColor }) => {
  return (
    <select onChange={handleSelectedColor} value={selectedColor}>
      {colorList.map((item) => (
        <option value={item.code} key={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default ColorDropdown;
