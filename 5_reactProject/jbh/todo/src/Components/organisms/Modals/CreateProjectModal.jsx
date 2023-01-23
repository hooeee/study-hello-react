import { useState } from "react";
import SelectBox from "../../molecules/selectboxs/SelectBox";
import style from "./CreateProjectModal.module.css";
import Form from "react-bootstrap/Form";
import SwitchButton from "../../atoms/forms/SwitchButton";

export default function CreateProjectModal() {
    const [todoFormat, setTodoFormat] = useState("todoList");
    const onTodoFormatChange = ({ target: { value } }) => {
        console.log(value);
        setTodoFormat(value);
    };

    return (
        <div>
            <div>이름</div>
            <div>
                <input className={style.projectNameInput}></input>
            </div>
            <div>색상</div>
            <SelectBox />
            <div className={style.switchButton}>
                <SwitchButton label={"즐겨찾기 추가"} />
            </div>
            <div>
                <span>보기</span>
                <Form>
                    <div className={style.imageGroup}>
                        <div className={style.firstGroup}>
                            <div className={`${style.firstDivImage} ${todoFormat === "todoList" ? style.firstDivCheckImage : ""}`} />
                            <Form.Check
                                inline
                                label="목록"
                                name="imageGroup"
                                type={"radio"}
                                id={`inline-radio-1`}
                                value="todoList"
                                checked={todoFormat === "todoList"}
                                onChange={onTodoFormatChange}
                            />
                        </div>
                        <div className={style.secondGroup}>
                            <div className={`${style.secondDivImage} ${todoFormat === "todoBoard" ? style.secondDivCheckImage : ""}`} />
                            <Form.Check
                                inline
                                label="보드"
                                name="imageGroup"
                                type={"radio"}
                                id={`inline-radio-1`}
                                value="todoBoard"
                                checked={todoFormat === "todoBoard"}
                                onChange={onTodoFormatChange}
                            />
                        </div>
                    </div>
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
