import { useState } from "react";
import SelectBox from "../../molecules/selectboxs/SelectBox";
import style from "./CreateProjectModal.module.css";

export default function CreateProjectModal() {
    return (
        <div>
            <div>이름</div>
            <div>
                <input className={style.projectNameInput}></input>
            </div>
            <div>색상</div>
            <SelectBox />
        </div>
    );
}
