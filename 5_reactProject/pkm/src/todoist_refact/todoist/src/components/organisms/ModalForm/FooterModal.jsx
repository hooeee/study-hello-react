import { Button } from "components/atoms";
import style from "./FooterModal.module.css";

export function FooterModal() {
  return (
    <div className={style.btnMain}>
      <Button name="취소" variant={"secondary"} fontColor={"black"}></Button>
      <Button name="추가" variant={"danger"}></Button>
    </div>
  );
}
