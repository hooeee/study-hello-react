import style from "./Button.module.css";
export function Button({ children, clickEvent, color, size }) {
  const sizePx = size + "px";
  return (
    <button
      className={style.btnMain}
      style={{ color: color, fontSize: sizePx }}
      onClick={() => clickEvent()}
    >
      {children}
    </button>
  );
}
