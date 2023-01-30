import { Label } from "components/atoms";
import { Form } from "react-bootstrap";
import style from "./ButtonLabel.module.css";
import { useState } from "react";

export function ButtonLabel({ name, setValue }) {
  const [isClick, setIsClick] = useState(false);
  return (
    <div className={style.ButtonLabelMain}>
      <Form>
        <Form.Check
          onClick={() => {
            setIsClick(!isClick);
            setValue(isClick);
          }}
          type="switch"
          checked={isClick}
        ></Form.Check>
      </Form>
      <Label name={name}></Label>
    </div>
  );
}
