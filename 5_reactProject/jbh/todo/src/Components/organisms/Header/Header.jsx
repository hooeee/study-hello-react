import "./Header.css";
import IconButton from "../../molecules/iconbutton/IconButton";
import SearchInput from "../../molecules/searchinputs/SearchInput";
import { AiOutlineBars, AiFillHome, AiOutlinePlus, AiFillQuestionCircle, AiOutlineBell } from "react-icons/ai";

export default function Header() {
    return (
        <header className="header">
            <div className="contents">
                <div>
                    <IconButton buttonName={<AiOutlineBars />}></IconButton>
                    <IconButton buttonName={<AiFillHome />}></IconButton>
                    <SearchInput></SearchInput>
                </div>

                <nav className="navigation">
                    <ul>
                        <li>
                            <IconButton buttonName={<AiOutlinePlus />}></IconButton>
                        </li>
                        <li>
                            <IconButton buttonName={<AiOutlinePlus />}></IconButton>
                        </li>
                        <li>
                            <IconButton buttonName={<AiFillQuestionCircle />}></IconButton>
                        </li>
                        <li>
                            <IconButton buttonName={<AiOutlineBell />}></IconButton>
                        </li>
                        <li>
                            <IconButton buttonName={<AiOutlinePlus />}></IconButton>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
