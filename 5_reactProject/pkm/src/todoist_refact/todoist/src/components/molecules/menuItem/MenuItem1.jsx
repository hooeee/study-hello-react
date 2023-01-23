import style from "./MenuItem1.module.css";
import { GoogleIcon } from "components/atoms";
import { useState } from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

export function MenuItem1({ color, iconName, size, menuName, contentCount }) {
  const [hideIcon, setHideIcon] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setHideIcon(true);
      }}
      onMouseLeave={() => {
        setHideIcon(false);
      }}
    >
      <div className={style.MenuItemMain}>
        <GoogleIcon color={color} iconName={iconName} size={size}></GoogleIcon>
        <span>{menuName}</span>
        {hideIcon == false ? (
          <>
            <span>{contentCount}</span>
          </>
        ) : (
          <>
            <Dropdown.Toggle
              className={style.DropMain}
              split
              variant="success"
              id="dropdown-split-basic"
            >
              <GoogleIcon
                color={"black"}
                iconName={"more_horiz"}
                size={size}
              ></GoogleIcon>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">프로젝트 추가</Dropdown.Item>
              <Dropdown.Item href="#/action-2">프로젝트 삭제</Dropdown.Item>
            </Dropdown.Menu>
          </>
          // <GoogleIcon
          //   color={"black"}
          //   iconName={"more_horiz"}
          //   size={size}
          // ></GoogleIcon>
        )}
      </div>
    </div>
  );
}
