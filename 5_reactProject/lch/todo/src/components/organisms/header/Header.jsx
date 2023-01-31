import style from "./Header.module.css";
import { Button } from "react-bootstrap";
import { GrHomeRounded } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlinePlus, AiOutlineQuestionCircle } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { HiOutlineBell } from "react-icons/hi";

export default function Header() {
  return (
    <div className={style.main}>
      <div className={style.left_control}>
        <Button variant="danger">
          <RxHamburgerMenu />
        </Button>
        <Button variant="danger">
          <GrHomeRounded />
        </Button>
        <input></input>
      </div>
      <div className={style.right_control}>
        <Button variant="danger">
          <AiOutlinePlus />
        </Button>
        <Button variant="danger">
          <BsGraphUp />
          0/5
        </Button>
        <Button variant="danger">
          <AiOutlineQuestionCircle />
        </Button>
        <Button variant="danger">
          <HiOutlineBell />
        </Button>
      </div>
    </div>
  );
}
