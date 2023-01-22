import { GoogleIcon, Input } from "components/atoms";
import style from "./IconInput.module.css";

export function IconInput({ iconName, color, size }) {
  return (
    <div className={style.IconInputMain}>
      <div className={style.googleIconMain}>
        <GoogleIcon iconName={iconName} color={color} size={size}></GoogleIcon>
      </div>
      <Input clasName={style.InputMain}></Input>
    </div>
  );
}
