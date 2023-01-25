import style from "./GoogleIcon.module.css";

export function GoogleIcon({ iconName, color, size }) {
  const sizeStd = size + "px";
  return (
    <span
      className="material-symbols-outlined"
      style={{ fontSize: size, color: color,marginLeft:"5px", marginRight:"5px" }}
    >
      {iconName}
    </span>
  );
}
