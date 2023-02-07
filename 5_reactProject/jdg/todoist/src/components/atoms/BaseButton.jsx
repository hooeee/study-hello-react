import style from "./BaseButton.module.css";

export function BaseButton({ children, onClick }) {
  return (
    <button className={style.baseButton} onClick={onClick}>
      {children}
    </button>
  );
}

export default BaseButton;
