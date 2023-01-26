import style from "./Label.module.css";
export function Label({ name, color }) {
  return (
    <>
      <label className={style.labelMain} style={{ color: `${color}` }}>
        {name}
      </label>
    </>
  );
}
