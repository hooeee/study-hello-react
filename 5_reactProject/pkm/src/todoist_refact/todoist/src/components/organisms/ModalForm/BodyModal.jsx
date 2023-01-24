import { CheckBoxImage, Label } from "components/atoms";
import style from "./BodyModal.module.css";
export function BodyModal() {
  return (
    <div>
      <Label style={{ margin: "10px" }} name="보기"></Label>
      <div className={style.checkBoxImageMain}>
        <CheckBoxImage
          label={"목록"}
          backgroundImg={
            "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/76bd6d1001a372ece03ef777813b3352.svg"
          }
        ></CheckBoxImage>
        <CheckBoxImage
          label={"보드"}
          backgroundImg={
            "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/04587b33fb8e382780f4fb5787663300.svg"
          }
        ></CheckBoxImage>
      </div>
      <div className={style.LabelMain}>
        <Label name="보기는 공유 프로젝트에서 팀 멤버들 간에 동기화 됩니다."></Label>
        <Label color={"red"} name="자세히 알아보기"></Label>
      </div>
    </div>
  );
}
