import style from "./Button.module.css";
export function Button({ children, clickEvent, color, btnSize }) {
  return (
    <button
      className={style.btnMain}
      style={{ color: color, fontSize: btnSize }}
      onClick={() => clickEvent()}
    >
      {children}
    </button>
  );
}
