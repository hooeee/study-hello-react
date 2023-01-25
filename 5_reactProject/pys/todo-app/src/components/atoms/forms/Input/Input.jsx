import style from "./Input.module.css";
import Form from "react-bootstrap/Form";
export function Input({ title, text, type }) {
  return (
    <>
      <div className={style.content}>
        <Form.Label>{title}</Form.Label>
        <Form.Control type={type}>{text}</Form.Control>
      </div>
    </>
  );
}
