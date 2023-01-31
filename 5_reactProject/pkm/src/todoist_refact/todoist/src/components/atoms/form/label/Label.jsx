import style from "./Label.module.css";
export function Label({ name, color, fontSize }) {
  return (
    <>
      <label
        className={style.labelMain}
        style={{ color: `${color}`, fontSize: `${fontSize}` }}
      >
        {name}
      </label>
    </>
  );
}
