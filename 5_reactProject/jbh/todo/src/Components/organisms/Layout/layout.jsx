import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import CreateProjectModal from "../Modals/CreateProjectModal";
import SideBar from "../SideBar/SideBar";
import style from "./layout.module.css";
import CenterModal from "../../molecules/modals/Modal";
import { addProject } from "../../../store/modalSlice";

export default function Layout(props) {
    const [open, setOpen] = useState(false);
    const [projectModal, setProjectModal] = useState(false);
    const hamburgerMenuClick = () => {
        setOpen(!open);
    };
    const projectModalClick = () => {
        setProjectModal(!projectModal);
    };

    const { project } = useSelector((store) => store.project);
    const dispatch = useDispatch();
    return (
        <div className={style.loyout}>
            <Header hamberClick={hamburgerMenuClick} />
            <div className={`${style.sidebar} ${open ? style.collapse_test : ""}`}>
                <SideBar modalClick={projectModalClick} />
            </div>

            <main className="main">{props.children}</main>
            {projectModal == true ? (
                <CenterModal
                    show={projectModal}
                    onSave={() => {
                        dispatch(addProject({ project }));
                        setProjectModal(false);
                    }}
                    onHide={() => setProjectModal(false)}
                >
                    <CreateProjectModal />
                </CenterModal>
            ) : null}
        </div>
    );
}
