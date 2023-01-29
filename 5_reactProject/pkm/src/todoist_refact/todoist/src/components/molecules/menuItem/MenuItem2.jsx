import { GoogleIcon, Label } from "components/atoms";
import { setModalShow } from "./../../../store/store";
import style from "./MenuItem2.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function MenuItem2() {
  const [hideIcon, setHideIcon] = useState(false);
  const dispatch = useDispatch();
  const { modalShow } = useSelector((state) => {
    return state;
  });
  return (
    <div
      onMouseEnter={() => {
        setHideIcon(true);
      }}
      onMouseLeave={() => {
        setHideIcon(false);
      }}
    >
      <div className={style.divMain}>
        <Label name={"프로젝트"}></Label>
        {hideIcon == true ? (
          <>
            <div
              onClick={() => {
                dispatch(setModalShow());
              }}
            >
              <GoogleIcon
                iconName={"add"}
                color={"black"}
                size={"25"}
              ></GoogleIcon>
            </div>
            <div>
              <GoogleIcon
                iconName={"expand_more"}
                color={"black"}
                size={"25"}
              ></GoogleIcon>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
