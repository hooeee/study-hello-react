import style from "./Input.module.css";

export function Input({
  bgColor,
  fontColor,
  color,
  value,
  setValue,
  placeholder,
}) {
  return (
    <input
      className={style.InputMain}
      style={{
        color: `${fontColor}`,
        backgroundColor: `${bgColor}`,
        border: `1px solid ${color}`,
      }}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {console.log(value)}
    </input>
  );
}
