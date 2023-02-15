import { Dropdown } from "react-bootstrap";
import style from "./ColorSelector.module.css";
import { useState } from "react";

export function ColorSelector({ colors, selectedItem, onSelectedHandler }) {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className={style.toggle}>
          <ColorItem color={selectedItem.color} name={selectedItem.name} />
        </Dropdown.Toggle>

        <Dropdown.Menu className={style.colorMenus}>
          {colors.map((item, index) => {
            return (
              <Dropdown.Item key={item.color}>
                <div className={style.colorItem}>
                  <ColorItem
                    clickHandler={() => {
                      onSelectedHandler(item);
                    }}
                    color={item.color}
                    name={item.name}
                  />
                </div>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export function ColorItem({ color, name, clickHandler }) {
  return (
    <>
      <div className={style.container} onClick={clickHandler}>
        <div className={style.circle} style={{ backgroundColor: color }} />
        <div>{name}</div>
      </div>
    </>
  );
}
