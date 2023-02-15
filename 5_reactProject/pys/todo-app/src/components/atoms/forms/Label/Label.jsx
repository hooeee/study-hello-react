import Form from "react-bootstrap/Form";
import css from "./Label.module.css";

export function Label(props) {
  return (
    <Form.Label {...props} className={css.label}>
      {props.children}
    </Form.Label>
  );
}
