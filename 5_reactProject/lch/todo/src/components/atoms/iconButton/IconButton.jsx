import style from "./IconButton.module.css";

export default function IconButton({ children, onClick }) {
  return (
    <div className={style.main}>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
