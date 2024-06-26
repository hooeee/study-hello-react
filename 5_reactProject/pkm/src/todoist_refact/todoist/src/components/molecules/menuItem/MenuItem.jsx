import style from "./MenuItem.module.css";
import { Button, GoogleIcon } from "@components/atoms";
export function MenuItem({
  color,
  iconName,
  size,
  menuName,
  contentCount,
  btnFunc,
  children
}) {
  return (
    <Button variant={"btnMenuHover"}>
      <div className={style.MenuItemMain}>
        <GoogleIcon color={color} iconName={iconName} size={size}></GoogleIcon>
        <span>{menuName}</span>
        <span>{contentCount}</span>
        {children}
      </div>
    </Button>
  );
}
