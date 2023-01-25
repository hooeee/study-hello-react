import style from "./Input.module.css";

export function Input({ bgcolor, fontColor,color,value, placeholder }) {
  return (
    <input
      className={style.InputMain}
      style={{
        color: `${fontColor}`,
        backgroundColor: `${bgcolor}`,
        border: `1px solid ${color}`,
      }}
      placeholder={placeholder}
      value={value}
    ></input>
  );
}
