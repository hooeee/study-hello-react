import "./Header.css";
import Hamburgur from "../../../images/hamburger.png";
import IconButton from "../../molecules/iconbutton/IconButton";
import SearchInput from "../../molecules/searchinputs/SearchInput";
import { AiOutlineBars, AiFillHome, AiOutlinePlus, AiFillQuestionCircle, AiOutlineBell } from "react-icons/ai";

export default function Header({ click }) {
    return (
        <div>
            <div className="header">
                <img src={Hamburgur} alt="menu" onClick={click}></img>
                <sapn>BeomBeomJoJo</sapn>
            </div>
        </div>
    );
}
