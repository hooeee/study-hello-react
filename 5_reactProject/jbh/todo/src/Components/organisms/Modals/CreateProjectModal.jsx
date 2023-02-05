import { useDispatch, useSelector } from "react-redux";
import SelectBox from "../../molecules/selectboxs/SelectBox";
import style from "./CreateProjectModal.module.css";
import Form from "react-bootstrap/Form";
import SwitchButton from "../../atoms/forms/SwitchButton";
import ImageCheck from "../../molecules/imagechecks/ImageCheck";
import { changeProject } from "../../../store/modalSlice";

//...
export default function CreateProjectModal() {
    const { project } = useSelector((store) => store.project);
    const dispatch = useDispatch();

    return (
        <div>
            <Form>
                <div>이름</div>
                <div>
                    <input
                        className={style.projectNameInput}
                        name="name"
                        onChange={(e) => {
                            dispatch(changeProject({ name: e.target.name, value: e.target.value }));
                        }}
                    ></input>
                </div>
                <div>색상</div>
                <SelectBox />
                <div className={style.switchButton}>
                    <SwitchButton
                        label={"즐겨찾기 추가"}
                        checked={project.favorite}
                        onChange={(e) => {
                            dispatch(changeProject({ name: "favorite", value: e.target.checked }));
                        }}
                    />
                </div>
                <div>
                    <span>보기</span>
                    <div className={style.imageGroup}>
                        <div className={style.firstGroup}>
                            <ImageCheck
                                divImage={style.firstDivImage}
                                divCheckImage={style.firstDivCheckImage}
                                label={"목록"}
                                format={"todoList"}
                                todoFormat={project.listName}
                                onTodoFormatChange={(e) => {
                                    dispatch(changeProject({ name: "listName", value: e.target.value }));
                                }}
                            />
                        </div>
                        <div className={style.secondGroup}>
                            <ImageCheck
                                divImage={style.secondDivImage}
                                divCheckImage={style.secondDivCheckImage}
                                label={"보드"}
                                format={"todoBoard"}
                                todoFormat={project.listName}
                                onTodoFormatChange={(e) => {
                                    dispatch(changeProject({ name: "listName", value: e.target.value }));
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <span>보기는 공유 프로젝트에서 팀 멤버들 간에 동기화됩니다.</span>
                    <a href="https://todoist.com/ko/help/articles/how-to-use-board-view" target="_blank" className={style.link}>
                        자세히 알아보기
                    </a>
                </div>
            </Form>
        </div>
    );
}
