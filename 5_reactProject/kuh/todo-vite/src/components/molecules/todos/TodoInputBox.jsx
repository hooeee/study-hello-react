import { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { projectStore } from "stores";
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
  const [keyword, setKeyword] = useState("");

  const onSubmitHandle = (e) => {
    onSubmit(e, keyword);
    setKeyword("");
  };

  return (
    <div className={focus ? style.focusContainer : style.container}>
      <form onSubmit={onSubmitHandle}>
        <div className={style.todoForm}>
          <input
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
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
          <div></div>
          <div>
            <Button size="sm" style={cancleButtonStyle}>
              취소
            </Button>
            <Button
              size="sm"
              style={submitButtonStyle}
              type="submit"
              onClick={onSubmitHandle}
            >
              작업추가
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
