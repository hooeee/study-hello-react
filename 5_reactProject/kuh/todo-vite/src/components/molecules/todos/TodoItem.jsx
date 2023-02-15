import { useState } from "react";
import style from "./TodoItem.module.css";

export function TodoItem({ title, done, id, setTitle, onClcik }) {
  const [hover, setHover] = useState(false);
  return (
    <div className={style.todo}>
      <div
        onClick={onClcik}
        className={style.todoIconContainer}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
      >
        <span
          className={`${style.todoIcon} ${
            hover || done == true ? style.todoIconHover : <></>
          }`}
        >
          {hover || done == true ? (
            <span
              style={{ fontSize: "14px" }}
              class="material-symbols-outlined"
            >
              done
            </span>
          ) : (
            <></>
          )}
        </span>
      </div>
      <span>
        <input className={style.todoInput} value={title} />
      </span>
    </div>
  );
}
