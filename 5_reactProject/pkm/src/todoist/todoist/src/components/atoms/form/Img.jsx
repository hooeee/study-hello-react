import { Image } from "react-bootstrap";
import "./img.css";
export function Img({ color, changeImage }) {
  return (
    <>
      <div className={color} onClick={() => {changeImage()}}></div>
    </>
  );
}
