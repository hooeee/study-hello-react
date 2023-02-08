import { Button } from "@components/atoms";
import style from "./FooterModal.module.css";
import { useStore } from "@store";
export function FooterModal() {
  const {
    name,
    color,
    colorName,
    like,
    look,
    project,
    setProjectCancel,
    setProjectAdd,
    setProject,
  } = useStore();
  return (
    <div className={style.btnMain}>
      <div
        className={style.btnGrey}
        onClick={() => {
          setProjectCancel();
        }}
      >
        <Button
          variant={"btnMenuHover"}
          name="취소"
          fontColor={"black"}
        ></Button>
      </div>
      <div
        className={style.btnRed}
        onClick={() => {
          setProjectCancel();
          setProjectAdd();
          console.log(name);
          console.log(color);
          console.log(colorName);
          console.log(like);
          console.log(look);
          setProject(name, color, colorName, like, look);
          project.map((obj, index) => {
            console.log(obj);
          });
        }}
      >
        <Button
          variant={"btnNavHover"}
          name="추가"
          fontColor={"white"}
        ></Button>
      </div>
    </div>
  );
}
