import style from "./ImageCheckbox.module.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";
export function ImageCheckbox({
  url,
  overUrl,
  label,
  isChecked,
  onClickHandler,
}) {
  const [image, setImage] = useState(url);

  return (
    <div onClick={onClickHandler}>
      <div
        style={{ background: `url(${image})` }}
        onMouseOver={() => {
          setImage(overUrl);
        }}
        onMouseLeave={() => {
          setImage(url);
        }}
        className={style.image}
      ></div>
      
      <Form.Check id="form_check" className={style.checked} label={label} checked={isChecked} type='radio' />
    </div>
  );
}
