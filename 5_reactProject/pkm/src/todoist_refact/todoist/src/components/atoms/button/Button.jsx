import { default as Button_bs } from "react-bootstrap/Button";
import style from "./Button.module.css";

export function Button({ name, styCss }) {
  return <Button_bs className={style.btnSize}>{name}</Button_bs>;
}
