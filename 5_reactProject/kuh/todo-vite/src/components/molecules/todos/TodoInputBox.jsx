import { useState } from "react";
import { Button } from "react-bootstrap";
import style from "./TodoInputBox.module.css";

const cancleButtonStyle = {
  background: "#e5e5e5",
  border: "1px #e5e5e5 solid",
  color: "black",
  padding: "5px 12px",
  fontSize: "13px",
};

const submitButtonStyle = {
  background: "#db4c3f",
  border: "1px #db4c3f solid",
  padding: "5px 12px",
  fontSize: "13px",
};

export function TodoInputBox({ onSubmit }) {
  const [focus, setFocus] = useState(false);

  return (
    <div className={focus ? style.focusContainer : style.container}>
      <form onSubmit={onSubmit}>
        <div className={style.todoForm}>
          <input
            type="text"
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              setFocus(false);
            }}
          />
          <input type="text" placeholder="설명" />
        </div>
        <div className={style.footer}>
          <div>123123</div>
          <div>
            <Button size="sm" style={cancleButtonStyle} type="submit">
              취소
            </Button>
            <Button size="sm" style={submitButtonStyle}>
              작업추가
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
