import { useState } from "react";
import style from "./TodoItem.module.css";

export function TodoItem({ title, done, id, setTitle }) {
  const [hover, setHover] = useState(false);
  return (
    <div className={style.todo}>
      <div
        className={style.todoIconContainer}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
      >
        <span
          className={`${style.todoIcon} ${hover ? style.todoIconHover : <></>}`}
        >
          {hover ? (
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
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value, id);
          }}
        />
      </span>
    </div>
  );
}
