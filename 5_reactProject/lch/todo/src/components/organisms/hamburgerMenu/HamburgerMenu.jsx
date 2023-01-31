import style from "./HamburgerMenu.module.css";
import { Button } from "react-bootstrap";

export default function HamburgerMenu() {
  return (
    <div className={style.main}>
      <div>
        <Button variant="outline-secondary">관리함</Button>
      </div>
      <div>
        <Button variant="outline-secondary">오늘</Button>
      </div>
    </div>
  );
}
