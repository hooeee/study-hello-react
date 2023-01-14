import "./SideBar.css";
import IconButton from "../../molecules/iconbutton/IconButton";
import { AiFillAppstore, AiFillCalendar, AiOutlineBorderTop, AiFillFilter, AiOutlinePlus, AiOutlineLeft } from "react-icons/ai";

export default function SideBar({ open, over, mouseHover }) {
    return (
        <div>
            <div className={`sidebar ${open ? `collapse` : ""}`}>
                <ul>
                    <li>
                        <AiFillAppstore />
                        관리함
                    </li>
                    <li>
                        <AiFillCalendar />
                        오늘
                    </li>
                    <li>
                        <AiOutlineBorderTop />
                        다음
                    </li>
                    <li>
                        <AiFillFilter />
                        필터 & 라벨
                    </li>
                    <li>
                        <div className="project-group" onMouseOver={mouseHover}>
                            <span>프로젝트</span>
                            <div className={`hover ${over ? `visible` : ""}`}>
                                <IconButton buttonName={<AiOutlinePlus />} />
                                <IconButton buttonName={<AiOutlineLeft />} />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
