import { CheckBoxImage, Label } from "components/atoms";
import { useDispatch, useSelector } from "react-redux";
import { setCheckClick } from "./../../../store/store";
import { useStore } from "./../../../store/useStore";

import style from "./BodyModal.module.css";
export function BodyModal() {
  const { checkClick } = useSelector((state) => {
    return state;
  });
  console.log(checkClick);
  const dispatch = useDispatch();
  const { look, setLook } = useStore();
  return (
    <div>
      <Label style={{ margin: "10px" }} name="보기"></Label>
      <div className={style.checkBoxImageMain}>
        <div
          onClick={() => {
            dispatch(setCheckClick());
            // console.log("목룍");
            // console.log(checkClick);
            checkClick == false ? setLook("list") : setLook("board");
          }}
        >
          <CheckBoxImage
            name={"imageBox"}
            label={"목록"}
            backgroundImg1={
              "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/76bd6d1001a372ece03ef777813b3352.svg"
            }
            backgroundImg2={
              "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/21ab83928e698e2cd56b75be2756e393.svg"
            }
            checkBoxComponent={checkClick}
          ></CheckBoxImage>
        </div>
        <div
          onClick={() => {
            dispatch(setCheckClick());
            // console.log("보드");
            // console.log(checkClick);
            checkClick == false ? setLook("board") : setLook("list");
          }}
        >
          <CheckBoxImage
            name={"imageBox"}
            label={"보드"}
            backgroundImg1={
              "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/04587b33fb8e382780f4fb5787663300.svg"
            }
            backgroundImg2={
              "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/235e73c80b156de08b5182c969622c08.svg"
            }
            checkBoxComponent={!checkClick}
          ></CheckBoxImage>
        </div>
      </div>
      <div className={style.LabelMain}>
        <Label name="보기는 공유 프로젝트에서 팀 멤버들 간에 동기화 됩니다."></Label>
        <Label color={"red"} name="자세히 알아보기"></Label>
      </div>
    </div>
  );
}
