import style from "./CheckBoxImage.module.css";
import { Form } from "react-bootstrap";
import { useState, useRef } from "react";

export function CheckBoxImage({
  backgroundImg1,
  backgroundImg2,
  label,
  name,
  checkBoxComponent,
}) {
  const [checkBtn, setCheckBtn] = useState(true);
  return (
    <div>
      {
        <>
          <div
            className={style.imageMain}
            style={{
              background:
                checkBoxComponent == false
                  ? `url(${backgroundImg1})`
                  : `url(${backgroundImg2})`,
              border:
                checkBoxComponent == false ? "1px solid grey" : "1px solid red",
            }}
          ></div>
          <Form.Check
            type="radio"
            id="checkbox"
            checked={checkBoxComponent}
            // ref={checkBoxComponent}
            label={label}
            name={name}
          />
        </>
      }
    </div>
  );
}
