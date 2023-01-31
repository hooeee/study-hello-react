import { GoogleIcon, Input } from "components/atoms";
import style from "./IconInput.module.css";

export function IconInput({
  iconName,
  color,
  size,
  bgColor,
  fontColor,
  value,
  setValue,
}) {
  return (
    <div className={style.IconInputMain} style={{ background: bgColor }}>
      <div className={style.googleIconMain}>
        <GoogleIcon iconName={iconName} color={color} size={size}></GoogleIcon>
      </div>
      <Input
        bgColor={bgColor}
        clasName={style.InputMain}
        value={value}
        setValue={setValue}
        fontColor={fontColor}
      ></Input>
    </div>
  );
}
