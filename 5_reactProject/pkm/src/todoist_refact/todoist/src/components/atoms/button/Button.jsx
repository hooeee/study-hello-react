import { default as Button_bs } from "react-bootstrap/Button";
import style from "./Button.module.css";

export function Button({ children, variant, fontColor, name }) {
  return (
    <button
      variant={variant}
      className={style.btnSize}
      style={{ color: `${fontColor}` }}
    >
      {name}
      {children}
    </button>
  );
}
