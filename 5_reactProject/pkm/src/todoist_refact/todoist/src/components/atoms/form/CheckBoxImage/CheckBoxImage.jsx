import style from "./CheckBoxImage.module.css";
import { Form } from "react-bootstrap";
import { useState } from "react";
export function CheckBoxImage({ backgroundImg, label, name }) {
  const [checkClick, setCheckClick] = useState(true);
  return (
    <Form>
      {
        <>
          <div
            className={style.imageMain}
            style={{ background: `url(${backgroundImg})` }}
            onClick={() => {
              setCheckClick(!checkClick);
            }}
          ></div>
          <Form.Check
            checked={checkClick}
            type="checkbox"
            id="checkbox"
            label={label}
            name={name}
            onClick={() => {
              setCheckClick(!checkClick);
            }}
          />
        </>
      }
    </Form>
  );
}
