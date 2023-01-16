import { default as Button_Boot } from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { changeName } from "./../../../redux/store";
import "./Button.css";
export function Button({ btnName, variant, btnStyle, onClickBtn }) {
  const dispatch = useDispatch();
  return (
    <>
      <Button_Boot
        onClick={() => {
          onClickBtn();
        }}
        variant={variant}
        className={btnStyle}
      >
        {btnName}
      </Button_Boot>
    </>
  );
}
