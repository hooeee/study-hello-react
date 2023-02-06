import { GoogleIcon, Input } from "@components/atoms";
import style from "./IconInput.module.css";

export function IconInput({
  iconName,
  color,
  size,
  bgColor,
  fontColor,
  value,
  setValue,
  placeholder,
  children,
}) {
  return (
    <div className={style.IconInputMain} style={{ background: bgColor }}>
      <div className={style.googleIconMain}>
        <GoogleIcon iconName={iconName} color={color} size={size}></GoogleIcon>
      </div>
      <Input
        placeholder={placeholder}
        bgColor={bgColor}
        clasName={style.InputMain}
        value={value}
        setValue={setValue}
        fontColor={fontColor}
      ></Input>
      {children}
    </div>
  );
}
