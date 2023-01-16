import "./Selector.css";
import Select from "react-select";
import { useState } from "react";

export function Selector({ items, selectStyle, selectedColor }) {
  return (
    <>
      <Select
        onChange={(e) => {
          selectedColor(e);
          //console.log(e);
        }}
        options={items}
        className={selectStyle}
      ></Select>
    </>
  );
}
