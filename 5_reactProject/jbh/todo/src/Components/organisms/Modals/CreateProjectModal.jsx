import { useState } from "react";
import SelectBox from "../../molecules/selectboxs/SelectBox";
import style from "./CreateProjectModal.module.css";
import Form from "react-bootstrap/Form";

export default function CreateProjectModal() {
    return (
        <div>
            <div>이름</div>
            <div>
                <input className={style.projectNameInput}></input>
            </div>
            <div>색상</div>
            <SelectBox />
            <div className={style.switchButton}>
                <Form>
                    <Form.Check type="switch" id="custom-switch" label="즐겨찾기에 추가" />
                </Form>
            </div>
            <div>
                <span>보기는 공유 프로젝트에서 팀 멤버들 간에 동기화됩니다.</span>
                <a href="https://todoist.com/ko/help/articles/how-to-use-board-view" target="_blank" className={style.link}>
                    자세히 알아보기
                </a>
            </div>
        </div>
    );
}
