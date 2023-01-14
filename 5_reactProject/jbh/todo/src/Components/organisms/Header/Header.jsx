import "./Header.css";
import Hamburgur from "../../../images/hamburger.png";
import IconButton from "../../molecules/iconbutton/IconButton";
import SearchInput from "../../molecules/searchinputs/SearchInput";
import { AiOutlineBars, AiFillHome, AiOutlinePlus, AiFillQuestionCircle, AiOutlineBell } from "react-icons/ai";

export default function Header({ hamberClick, homeClick }) {
    return (
        <div>
            <div className="header">
                <div className="header-button-group1">
                    <IconButton buttonName={<AiOutlineBars />} click={hamberClick}></IconButton>
                    <IconButton buttonName={<AiFillHome />} click={homeClick}></IconButton>
                </div>
                <div className="header-button-group2">
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
