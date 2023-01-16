import { Stack } from "react-bootstrap";
import { ProjectAddTitle } from "./../organisms/ProjectAddTitle";
import { ProjectAddAttributeFirst } from "../organisms/ProjectAddAttributeFirst";
import { ProjectAddAttributeSecond } from "../organisms/ProjectAddAttributeSecond";
import { ProjectAddAttributeFinal } from "../organisms/ProjectAddAttributeFinal";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export function ProjectAddTemplate({
  labelMainName,
  onChangeInput,
  NameLabelName,
  ColorLabelName,
  FavoriteLabelName,
  selectedColor,
  ViewName,
  ViewLabelName1,
  ViewLabelName2,
  checkedFlag1,
  checkedFlag2,
  DetaillabelName1,
  DetaillabelName2,
  cancelName,
  addName,
  onClickCancel,
  onClickOk,
  changeChecked1,
  changeChecked2,
}) {
  return (
    <>
      <Stack>
        <ProjectAddTitle
          labelMainName={labelMainName}
          labelStyle={"title-font-main"}
          btnName={<AiOutlineQuestionCircle />}
          btnStyle={"btn-font-main"}
          btnVarient={"out-line"}
        ></ProjectAddTitle>
        <ProjectAddAttributeFirst
          NameLabelName={NameLabelName}
          onChangeNameInputData={onChangeInput}
          NameLabelStyle={"subTitle-font-main"}
          NameInputStyle={"input-main"}
          ColorLabelName={ColorLabelName}
          ColorLabelStyle={"subTitle-font-main"}
          ColorSelectStyle={"select-main"}
          FavoriteLabelName={FavoriteLabelName}
          selectedColor={selectedColor}
        ></ProjectAddAttributeFirst>
        <ProjectAddAttributeSecond
          ViewName={ViewName}
          ViewLabelStyle={"subTitle-font-main"}
          color1={"list-img"}
          color2={"border-img"}
          ViewLabelName1={ViewLabelName1}
          ViewLabelName2={ViewLabelName2}
          checkboxId={1}
          checkboxId2={2}
          checkedFlag1={checkedFlag1}
          checkedFlag2={checkedFlag2}
          changeChecked1={changeChecked1}
          changeChecked2={changeChecked2}
          DetaillabelName1={DetaillabelName1}
          DetaillabelName2={DetaillabelName2}
          DetailLabelStyle1={"basic-font-style"}
          DetailLabelStyle2={"basic-font-style red-font"}
        ></ProjectAddAttributeSecond>
        <ProjectAddAttributeFinal
          cancelName={cancelName}
          addName={addName}
          btnStyle={"btn-font-main"}
          btnCancelVarient={"light"}
          btnOkVarient={"danger"}
          btnVarient={"outline-secondary"}
          onClickCancel={onClickCancel}
          onClickOk={onClickOk}
        ></ProjectAddAttributeFinal>
      </Stack>
    </>
  );
}
