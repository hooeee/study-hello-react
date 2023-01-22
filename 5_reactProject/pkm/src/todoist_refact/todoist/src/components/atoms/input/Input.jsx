import style from "./Input.module.css";

export function Input() {
  return (
    <input
      className={style.InputMain}
      style={{
        color: "white",
        backgroundColor: "#E37267",
        border: "1px solid #E37267",
      }}
      placeholder={"검색"}
    ></input>
  );
}
