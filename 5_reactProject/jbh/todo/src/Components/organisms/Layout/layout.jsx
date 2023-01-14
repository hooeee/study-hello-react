import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import "./layout.css";

export default function Layout(props) {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        console.log(open);
        setOpen(!open);
    };
    return (
        <div className="layout">
            <Header click={handleClick} />
            <SideBar open={open} />

            <main className="main">{props.children}</main>
        </div>
    );
}
