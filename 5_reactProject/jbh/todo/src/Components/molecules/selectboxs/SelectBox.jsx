import style from "./SelectBox.module.css";
import React, { useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import CircleText from "../circletexts/CircleText";
import { changeProject } from "../../../store/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const colorObjectFactory = (name, color) => {
    return {
        value: name,
        name,
        color,
    };
};

export default function SelectBox() {
    const [select, setSelect] = useState(colorObjectFactory("", "", ""));
    const OPTIONS = [
        colorObjectFactory("베리레드", "rgb(184, 37, 111)"),
        colorObjectFactory("레드", "rgb(219, 64, 53)"),
        colorObjectFactory("오렌지", "rgb(255, 153, 51)"),
        colorObjectFactory("옐로우", "rgb(250, 208, 0)"),
        colorObjectFactory("올리브 그린", "rgb(175, 184, 59)"),
        colorObjectFactory("라임 그린", "rgb(126, 204, 73)"),
        colorObjectFactory("그린", "rgb(41, 148, 56)"),
        colorObjectFactory("민트 그린", "rgb(106, 204, 188)"),
        colorObjectFactory("틸", "rgb(21, 143, 173)"),
        colorObjectFactory("스카이블루", "rgb(20, 170, 245)"),
        colorObjectFactory("라이트 블루", "rgb(150, 195, 235)"),
        colorObjectFactory("블루", "rgb(64, 115, 255)"),
        colorObjectFactory("그레이프", "rgb(136, 77, 255)"),
        colorObjectFactory("바이올렛", "rgb(175, 56, 235)"),
        colorObjectFactory("라벤더", "rgb(235, 150, 235)"),
        colorObjectFactory("마젠타", "rgb(224, 81, 148)"),
        colorObjectFactory("새먼", "rgb(255, 141, 133)"),
        colorObjectFactory("차콜", "rgb(128, 128, 128)"),
        colorObjectFactory("그레이", "rgb(184, 184, 184)"),
        colorObjectFactory("토프", "rgb(204, 172, 147)"),
    ];
    const change = (option) => {
        setSelect({ ...option });
    };

    const { project } = useSelector((store) => store.project);
    const dispatch = useDispatch();

    useEffect(() => {
        setSelect(colorObjectFactory("베리레드", "rgb(184, 37, 111)"));
    }, []);

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle className={style.dropdown} id="dropdown-basic">
                    <CircleText color={select.color} name={select.name} />
                </Dropdown.Toggle>

                <Dropdown.Menu className={style.dropdownMenu}>
                    {OPTIONS.map((option) => (
                        <Dropdown.Item
                            onClick={() => {
                                change(option);
                                dispatch(changeProject({ name: "colorKey", value: option.color }));
                                dispatch(changeProject({ name: "colorName", value: option.name }));
                            }}
                        >
                            <CircleText color={option.color} name={option.name} />
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
