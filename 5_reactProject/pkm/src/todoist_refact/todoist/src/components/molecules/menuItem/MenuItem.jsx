import style from "./MenuItem.module.css";
import { Button, GoogleIcon } from "components/atoms";
export function MenuItem({
  color,
  iconName,
  size,
  menuName,
  contentCount,
  btnFunc,
}) {
  return (
    <Button variant={"btnNavHover"}>
      <div className={style.MenuItemMain}>
        <GoogleIcon color={color} iconName={iconName} size={size}></GoogleIcon>
        <span>{menuName}</span>
        <span>{contentCount}</span>
      </div>
    </Button>
  );
}
