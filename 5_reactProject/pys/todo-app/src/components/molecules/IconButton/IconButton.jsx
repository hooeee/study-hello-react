import { Button } from "components/atoms/index";
import style from "./IconButton.module.css";

export function IconButton({
  children,
  icon,
  className,
  type = "button",
  onClick,
}) {
  return (
    <>
      <Button className={className} type={type} onClick={onClick}>
        <div className={style.content}>
          <span className="material-symbols-outlined menu_icon">{icon}</span>
          {children}
        </div>
      </Button>
    </>
  );
}
