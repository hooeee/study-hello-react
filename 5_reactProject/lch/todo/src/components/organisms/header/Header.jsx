import style from "./Header.module.css";
import { GrHomeRounded } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlinePlus, AiOutlineQuestionCircle } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { HiOutlineBell } from "react-icons/hi";
import IconButton from "../../atoms/iconButton/IconButton";

export default function Header() {
  return (
    <div className={style.main}>
      <div className={style.left_control}>
        <IconButton children={<RxHamburgerMenu />}></IconButton>
        <IconButton children={<GrHomeRounded />}></IconButton>
        <input></input>
      </div>
      <div className={style.right_control}>
        <IconButton children={<AiOutlinePlus />}></IconButton>
        <IconButton children={<BsGraphUp />}></IconButton>
        <IconButton children={<AiOutlineQuestionCircle />}></IconButton>
        <IconButton children={<HiOutlineBell />}></IconButton>
      </div>
    </div>
  );
}
