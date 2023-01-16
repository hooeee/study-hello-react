import style from "./SideBar.module.css";
import IconButton from "../../molecules/iconbutton/IconButton";
import { AiFillAppstore, AiFillCalendar, AiOutlineBorderTop, AiFillFilter, AiOutlinePlus, AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";

export default function SideBar() {
    const [over, setOver] = useState(false);
    return (
        <div>
            <div className={style.sidebar}>
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
                        <div
                            className={style.projectGroup}
                            onMouseOver={() => {
                                setOver(true);
                            }}
                            onMouseOut={() => {
                                setOver(false);
                            }}
                        >
                            <span>프로젝트</span>
                            <div className={over ? style.visible : style.hide}>
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
