import { default as Button_Boot } from "react-bootstrap/Button";
import "./Button.css";
export function Button({ btnName, variant, btnStyle }) {
  return (
    <>
      <Button_Boot variant={variant} className={btnStyle}>
        {btnName}
      </Button_Boot>
    </>
  );
}
