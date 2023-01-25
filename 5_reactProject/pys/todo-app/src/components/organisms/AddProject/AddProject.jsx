import style from "./AddProject.module.css";
import { Input } from "components/atoms";
export function AddProject() {
  return (
    <>
      <div className={style.header}>
        <h4>프로젝트 추가</h4>
      </div>
      <div className={style.body}>
        <Input text="test" type="text" title="항목" />
      </div>
      <div className={style.footer}></div>
    </>
  );
}
