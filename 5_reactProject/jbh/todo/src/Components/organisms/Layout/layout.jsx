import { useState } from "react";
import Header from "../Header/Header";
import CreateProjectModal from "../Modals/CreateProjectModal";
import SideBar from "../SideBar/SideBar";
import style from "./layout.module.css";

export default function Layout(props) {
    const [open, setOpen] = useState(false);
    const hamburgerMenuClick = () => {
        setOpen(!open);
    };
    return (
        <div className={style.loyout}>
            <Header hamberClick={hamburgerMenuClick} />
            <div className={`${style.sidebar} ${open ? style.collapse_test : ""}`}>
                <SideBar />
            </div>

            <main className="main">{props.children}</main>
            <CreateProjectModal />
        </div>
    );
}
