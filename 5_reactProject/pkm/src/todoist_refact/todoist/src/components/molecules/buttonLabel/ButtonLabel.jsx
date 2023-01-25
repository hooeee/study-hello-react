import { Label } from "components/atoms";
import { Form } from "react-bootstrap";
import style from "./ButtonLabel.module.css";

export function ButtonLabel({ name }) {
  return (
    <div className={style.ButtonLabelMain}>
      <Form>
        <Form.Check type="switch"></Form.Check>
      </Form>
      <Label name={name}></Label>
    </div>
  );
}
