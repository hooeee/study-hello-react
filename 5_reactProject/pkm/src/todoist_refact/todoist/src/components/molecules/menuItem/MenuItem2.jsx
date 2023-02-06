import { GoogleIcon, Label } from "@components/atoms";
import style from "./MenuItem2.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStore } from "./../../../store/useStore";

export function MenuItem2() {
  const [hideIcon, setHideIcon] = useState(false);
  const dispatch = useDispatch();
  const { modalShow } = useSelector((state) => {
    return state;
  });
  const { setProjectCancel } = useStore();
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
                setProjectCancel();
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
