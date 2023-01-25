import { Button } from "components/atoms/index";
import style from "./MenuButton.module.css";

export function MenuButton({
  icon,
  label,
  className,
  count,
  color = "white",
  type = "button",
  onClick,
}) {
  return (
    <>
      <Button className={className} type={type} onClick={onClick}>
        <div className={style.content}>
          <div className={style.title}>
            <div className={style.icon}>
              <span
                className="material-symbols-outlined menu_icon"
                style={{ color: color }}
              >
                {icon}
              </span>
            </div>

            <span className={style.label}>{label}</span>
          </div>
          <span className={style.count}>{count}</span>
        </div>
      </Button>
    </>
  );
}
