import style from "./Input.module.css";
import Form from "react-bootstrap/Form";
export function Input({ title, text, type, onChangedHandler }) {
  return (
    <>
      <div className={style.content}>
        <Form.Label>{title}</Form.Label>
        <Form.Control type={type} onChange={onChangedHandler}>
          {text}
        </Form.Control>
      </div>
    </>
  );
}
