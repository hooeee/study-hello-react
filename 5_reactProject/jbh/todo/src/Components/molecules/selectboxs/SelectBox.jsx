import style from "./SelectBox.module.css";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

const colorObjectFactory = (value, name, color) => {
    return {
        value,
        name,
        color,
    };
};

export default function SelectBox() {
    const [name, setName] = useState(colorObjectFactory("", "", ""));
    const OPTIONS = [
        colorObjectFactory("red", "베리레드", "rgb(184, 37, 111)"),
        colorObjectFactory("red", "레드", "rgb(219, 64, 53)"),
        colorObjectFactory("red", "오렌지", "rgb(255, 153, 51)"),
        colorObjectFactory("red", "옐로우", "rgb(250, 208, 0)"),
        colorObjectFactory("red", "올리브 그린", "rgb(175, 184, 59)"),
        colorObjectFactory("red", "라임 그린", "rgb(126, 204, 73)"),
        colorObjectFactory("red", "그린", "rgb(41, 148, 56)"),
        colorObjectFactory("red", "민트 그린", "rgb(106, 204, 188)"),
        colorObjectFactory("red", "틸", "rgb(21, 143, 173)"),
        colorObjectFactory("red", "스카이블루", "rgb(20, 170, 245)"),
        colorObjectFactory("red", "라이트 블루", "rgb(150, 195, 235)"),
        colorObjectFactory("red", "블루", "rgb(64, 115, 255)"),
        colorObjectFactory("red", "그레이프", "rgb(136, 77, 255)"),
        colorObjectFactory("red", "바이올렛", "rgb(175, 56, 235)"),
        colorObjectFactory("red", "라벤더", "rgb(235, 150, 235)"),
        colorObjectFactory("red", "마젠타", "rgb(224, 81, 148)"),
        colorObjectFactory("red", "새먼", "rgb(255, 141, 133)"),
        colorObjectFactory("red", "차콜", "rgb(128, 128, 128)"),
        colorObjectFactory("red", "그레이", "rgb(184, 184, 184)"),
        colorObjectFactory("red", "토프", "rgb(204, 172, 147)"),
    ];
    const change = (eventkey) => {
        setName(colorObjectFactory("", eventkey, ""));
    };
    return (
        <div>
            <Dropdown onSelect={change}>
                <Dropdown.Toggle className={style.dropdown} id="dropdown-basic">
                    {name.name}
                </Dropdown.Toggle>

                <Dropdown.Menu className={style.dropdownMenu}>
                    {OPTIONS.map((option) => (
                        <Dropdown.Item eventKey={option.name}>
                            <div className={style.item}>
                                <div className={style.circle} style={{ backgroundColor: option.color }}></div>
                                <div>{option.name}</div>
                            </div>
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
