import style from "./MenuItem1.module.css";
import { GoogleIcon } from "components/atoms";
import React, { useState } from "react";
import { Button, ButtonGroup, Dropdown, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setModalShow } from "./../../../store/store";

export function MenuItem1({ color, iconName, size, menuName, contentCount }) {
  const dispatch = useDispatch();
  const { modalShow } = useSelector((state) => {
    return state;
  });
  const [hideIcon, setHideIcon] = useState(false);
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));
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
          <div className={style.DropMain}>
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-1">
                <GoogleIcon
                  color={"black"}
                  iconName={"more_horiz"}
                  size={size}
                ></GoogleIcon>
              </Dropdown.Toggle>
              <Dropdown.Menu className="super-colors">
                <Dropdown.Item
                  eventKey="1"
                  onClick={() => {
                    dispatch(setModalShow());
                  }}
                >
                  프로젝트 추가
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">프로젝트 삭제</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
      </div>
    </div>
  );
}
