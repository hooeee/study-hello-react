import { ProjectAddTemplate } from "../templates/ProjectAddTemplate";
import { BsCircle } from "react-icons/bs";
import { changeColor, inputName, changeCheck } from "./../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
export function ProjectAddPage({
  labelMainName,
  NameLabelName,
  ColorLabelName,
  FavoriteLabelName,
  ViewName,
  ViewLabelName1,
  ViewLabelName2,
  checkedFlag1,
  checkedFlag2,
  DetaillabelName1,
  DetaillabelName2,
  cancelName,
  addName,
  changeChecked1,
  changeChecked2,
}) {
  const color = <Circle color={"blue"} />;

  const { items, projectAddName, checkedFlag } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  const onSelectedColor = (value, e) => {
    dispatch(changeColor(value));
  };
  const onInputChange = (value, e) => {
    dispatch(inputName(value));
  };
  const onBtnCancel = () => {
    console.log("취소");
  };
  const onBtnOk = () => {
    console.log("추가");
    console.log(items);
    console.log(projectAddName);
    console.log(checkedFlag);
  };
  const onChangedChecked = (value, e) => {
    console.log(value);
    dispatch(changeCheck());
  };
  return (
    <>
      <ProjectAddTemplate
        labelMainName={"프로젝트 추가"}
        onChangeInput={onInputChange}
        NameLabelName={"이름"}
        ColorLabelName={"색상"}
        selectedColor={onSelectedColor}
        FavoriteLabelName={"즐겨찾기에 추가"}
        ViewName={"보기"}
        ViewLabelName1={"목록"}
        checkedFlag1={checkedFlag.flag1}
        changeChecked1={onChangedChecked}
        ViewLabelName2={"보드"}
        checkedFlag2={checkedFlag.flag2}
        changeChecked2={onChangedChecked}
        DetaillabelName1={
          "보기는 공유 프로젝트에서 팀 멤버들 간에 동기화됩니다."
        }
        DetaillabelName2={"자세히 알아보기"}
        cancelName={"취소"}
        addName={"추가"}
        onClickCancel={onBtnCancel}
        onClickOk={onBtnOk}
      ></ProjectAddTemplate>
    </>
  );
}

export function Circle({ color }) {
  return (
    <div
      style={{
        width: "15px",
        height: "15px",
        "border-radius": "50%",
        background: color,
      }}
    ></div>
  );
}
