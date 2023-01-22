import style from "./MenuItem.module.css";
import { GoogleIcon } from "components/atoms";
export function MenuItem({ color, iconName, size, menuName, contentCount }) {
  return (
    <div className={style.MenuItemMain}>
      <GoogleIcon color={color} iconName={iconName} size={size}></GoogleIcon>
      <span>{menuName}</span>
      <span>{contentCount}</span>
    </div>
  );
}
