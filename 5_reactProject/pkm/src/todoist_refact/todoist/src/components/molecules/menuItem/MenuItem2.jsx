import { GoogleIcon, Label } from "components/atoms";
import style from "./MenuItem2.module.css";
import { useState } from "react";

export function MenuItem2() {
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
      <div className={style.divMain}>
        <Label name={"프로젝트"}></Label>
        {hideIcon == true ? (
          <>
            <GoogleIcon
              iconName={"add"}
              color={"black"}
              size={"25"}
            ></GoogleIcon>
            <GoogleIcon
              iconName={"expand_more"}
              color={"black"}
              size={"25"}
            ></GoogleIcon>
          </>
        ) : null}
      </div>
    </div>
  );
}
