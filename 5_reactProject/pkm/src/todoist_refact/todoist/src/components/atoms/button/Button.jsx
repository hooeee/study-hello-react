import { default as Button_bs } from "react-bootstrap/Button";
import style from "./Button.module.css";

export function Button({ name, variant, fontColor }) {
  return (
    <Button_bs
      variant={variant}
      className={style.btnSize}
      style={{ color: `${fontColor}`, opacity: 0.7 }}
    >
      {name}
    </Button_bs>
  );
}
