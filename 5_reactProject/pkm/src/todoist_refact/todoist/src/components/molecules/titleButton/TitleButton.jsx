import { GoogleIcon, Label } from "components/atoms";
import style from "./TitleButton.module.css";
export function TitleButton({ name, iconName, color }) {
  return (
    <div className={style.LabelMain}>
      <Label name={name}></Label>
      <GoogleIcon iconName={iconName} color={color} size={"25px"}></GoogleIcon>
    </div>
  );
}
