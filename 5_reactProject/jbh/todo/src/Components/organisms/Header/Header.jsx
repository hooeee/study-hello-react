import style from "./Header.module.css";
import IconButton from "../../molecules/iconbutton/IconButton";
import SearchInput from "../../molecules/searchinputs/SearchInput";
import { AiOutlineBars, AiFillHome, AiOutlinePlus, AiFillQuestionCircle, AiOutlineBell } from "react-icons/ai";

export default function Header({ hamberClick, homeClick }) {
    return (
        <div>
            <div className={style.header}>
                <div className={style.headerButtonGroup1}>
                    <IconButton buttonName={<AiOutlineBars />} click={hamberClick}></IconButton>
                    <IconButton buttonName={<AiFillHome />} click={homeClick}></IconButton>
                    <SearchInput />
                </div>
                <div className={style.headerButtonGroup2}>
                    <IconButton buttonName={<AiOutlinePlus />} click={homeClick}></IconButton>
                    <IconButton buttonName={<AiOutlinePlus />} click={homeClick}></IconButton>
                    <IconButton buttonName={<AiFillQuestionCircle />} click={homeClick}></IconButton>
                    <IconButton buttonName={<AiOutlineBell />} click={homeClick}></IconButton>
                    <IconButton buttonName={<AiOutlineBell />} click={homeClick}></IconButton>
                </div>
            </div>
        </div>
    );
}
