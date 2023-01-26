import { useState } from "react";
import Header from "../Header/Header";
import CreateProjectModal from "../Modals/CreateProjectModal";
import SideBar from "../SideBar/SideBar";
import style from "./layout.module.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CenterModal from "../../molecules/modals/Modal";

export default function Layout(props) {
    const [open, setOpen] = useState(false);
    const [projectModal, setProjectModal] = useState(false);
    const hamburgerMenuClick = () => {
        setOpen(!open);
    };
    const projectModalClick = () => {
        setProjectModal(!projectModal);
    };
    return (
        <div className={style.loyout}>
            <Header hamberClick={hamburgerMenuClick} />
            <div className={`${style.sidebar} ${open ? style.collapse_test : ""}`}>
                <SideBar modalClick={projectModalClick} />
            </div>

            <main className="main">{props.children}</main>
            {projectModal == true ? (
                <CenterModal show={projectModal} onHide={() => setProjectModal(false)}>
                    <CreateProjectModal />
                </CenterModal>
            ) : null}
        </div>
    );
}
