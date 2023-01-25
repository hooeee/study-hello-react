import { default as Button_bs } from "react-bootstrap/Button";
import style from "./Button.module.css";

export function Button({ children, variant, fontColor }) {
  const style={
    display:"inline-flex",
    width: "100%",
    height:"10px",
    alignItems: "center",
    justifyContent:"space-between",
    position:"relative",
    color: `${fontColor}`, 
    opacity: 1 ,
    background:"transparent",
    border: "solid 1px transparent"
  }
  return (
    <Button_bs
      variant={variant}
      className={style.btnSize}
      style={style}
    >
      {children}
    </Button_bs>
  );
}
