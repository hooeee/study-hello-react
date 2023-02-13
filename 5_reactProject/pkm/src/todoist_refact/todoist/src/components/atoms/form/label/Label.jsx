import style from "./Label.module.css";
export function Label({ name, color, fontSize, ...props }) {
  return (
    <>
      <label
        className={style.labelMain}
        style={{ color: `${color}`, fontSize: `${fontSize}` }}
        {...props}
      >
        {name}
      </label>
    </>
  );
}
