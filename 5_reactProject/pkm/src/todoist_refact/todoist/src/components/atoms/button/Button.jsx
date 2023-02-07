import { default as Button_bs } from "react-bootstrap/Button";
import style from "./Button.module.css";

export function Button({ children, variant, fontColor, name, ...props }) {
  return (
    <button
      {...props}
      className={
        style.btnSize +
        " " +
        `${variant == "btnNavHover" ? style.btnNavHover : style.btnMenuHover}`
      }
      // className={style.btnSize`${
      //   " " + variant != "navHover" ? style.btn : style.btnSize
      // }`}
      style={{ color: `${fontColor}` }}
    >
      {name}
      {children}
    </button>
  );
}
