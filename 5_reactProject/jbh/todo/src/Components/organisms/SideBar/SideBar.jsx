import style from "./SideBar.module.css";
import IconButton from "../../molecules/iconbutton/IconButton";
import { AiFillAppstore, AiFillCalendar, AiOutlineBorderTop, AiFillFilter, AiOutlinePlus, AiOutlineLeft, AiOutlineEllipsis } from "react-icons/ai";
import { useState } from "react";
import { useSelector } from "react-redux";
import CircleText from "../../molecules/circletexts/CircleText.jsx";

export default function SideBar({ modalClick }) {
    const [over, setOver] = useState(false);
    const { project } = useSelector((store) => store);
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
                                <IconButton buttonName={<AiOutlinePlus />} click={modalClick} />
                                <IconButton buttonName={<AiOutlineLeft />} />
                            </div>
                        </div>
                    </li>
                    <div>
                        {project.projectItems.map((value, index) => {
                            return (
                                <div className={style.projectGroup} key={index}>
                                    <CircleText color={project.projectItems[index].project.colorKey} name={project.projectItems[index].project.name} />
                                    <IconButton buttonName={<AiOutlineEllipsis />} />
                                </div>
                            );
                        })}
                    </div>
                </ul>
            </div>
        </div>
    );
}
