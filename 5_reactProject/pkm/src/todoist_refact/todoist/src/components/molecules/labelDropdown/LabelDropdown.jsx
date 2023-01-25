import { Label, GoogleIcon, Input } from "components/atoms";
import React, { useState } from "react";
import { Form, Dropdown } from "react-bootstrap";
import style from "./LabelDropdown.module.css";

export function LabelDropDown({ name }) {
  const [selectColor, setSelectColor] = useState([
    { id: "베리레드", color: "#B8266E", name: "베리 레드" },
  ]);
  const items = [
    {
      id: "베리레드",
      color: "#B8266E",
      name: "베리 레드",
    },
    {
      id: "레드",
      color: "#DB3F35",
      name: "레드",
    },
    {
      id: "오렌지",
      color: "#FF9933",
      name: "오렌지",
    },
    {
      id: "옐로우",
      color: "#F9D000",
      name: "옐로우",
    },
    {
      id: "올리브그린",
      color: "#AFB83B",
      name: "올리브 그린",
    },
  ];
  const ChangeColor = (color) => {
    setSelectColor({ ...color });
  };

  return (
    <div>
      <Label name={name}></Label>
      <Dropdown className={style.DropMain}>
        <Dropdown.Toggle className={style.dropdown} id="dropdown-basic">
          <Circle color={selectColor.color} />
          {selectColor.name}
        </Dropdown.Toggle>

        <Dropdown.Menu className={style.dropdownMenu}>
          {items.map((obj, index) => (
            <Dropdown.Item
              className={style.dropdownItem}
              key={index}
              onClick={() => {
                ChangeColor(obj);
              }}
            >
              <Circle color={obj.color} />
              {obj.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export function Circle({ color }) {
  return (
    <div>
      <div
        style={{
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          background: color,
          marginRight: "10px",
        }}
      ></div>
      <div>{name}</div>
    </div>
  );
}
