import { default as Button_bs } from "react-bootstrap/Button";
import style from "./Button.module.css";

export function Button({ name, runFunction }) {
  return (
    <Button_bs
      className={style.btnSize}
      onClick={() => {
        runFunction;
      }}
    >
      {name}
    </Button_bs>
  );
}
