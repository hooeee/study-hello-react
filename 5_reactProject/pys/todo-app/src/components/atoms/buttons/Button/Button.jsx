import style from "./Button.module.css";

export function Button({ children, className, type = "button", onClick }) {
  return (
    <>
      <div className={style.content}>
        <button type={type} onClick={onClick} className={className}>
          {children}
        </button>
      </div>
    </>
  );
}
