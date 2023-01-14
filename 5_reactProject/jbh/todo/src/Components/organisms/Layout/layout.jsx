import { useState } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import "./layout.css";

export default function Layout(props) {
    const [open, setOpen] = useState(false);
    const [over, setOver] = useState(false);
    const hamburgerMenuClick = () => {
        setOpen(!open);
    };
    const mouseHover = () => {
        console.log("hover..");
        setOver(!over);
    };
    return (
        <div className="layout">
            <Header hamberClick={hamburgerMenuClick} />
            <SideBar open={open} over={over} mouseHover={mouseHover} />

            <main className="main">{props.children}</main>
        </div>
    );
}
