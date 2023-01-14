import { Stack } from "react-bootstrap";
import { ProjectAddTitle } from "./../organisms/ProjectAddTitle";
import { ProjectAddAttributeFirst } from "../organisms/ProjectAddAttributeFirst";
import { ProjectAddAttributeSecond } from "../organisms/ProjectAddAttributeSecond";
import { ProjectAddAttributeFinal } from "../organisms/ProjectAddAttributeFinal";
export function ProjectAddTemplate({
  labelMainName,
  btnName,
  NameLabelName,
  ColorLabelName,
  FavoriteLabelName,
  items,
  ViewName,
  color1,
  color2,
  ViewLabelName1,
  ViewLabelName2,
  DetaillabelName1,
  DetaillabelName2,
  DetailLabelStyle1,
  DetailLabelStyle2,
  cancelName,
  addName,
}) {
  return (
    <>
      <Stack>
        <ProjectAddTitle
          labelMainName={labelMainName}
          labelStyle={"title-font-main"}
          btnName={btnName}
          btnStyle={"btn-font-main"}
          btnVarient={"out-line"}
        ></ProjectAddTitle>
        <ProjectAddAttributeFirst
          NameLabelName={NameLabelName}
          NameLabelStyle={"subTitle-font-main"}
          NameInputStyle={"input-main"}
          ColorLabelName={ColorLabelName}
          ColorLabelStyle={"subTitle-font-main"}
          ColorSelectStyle={"select-main"}
          FavoriteLabelName={FavoriteLabelName}
          items={items}
        ></ProjectAddAttributeFirst>
        <ProjectAddAttributeSecond
          ViewName={ViewName}
          ViewLabelStyle={"subTitle-font-main"}
          color1={color1}
          color2={color2}
          ViewLabelName1={ViewLabelName1}
          ViewLabelName2={ViewLabelName2}
          DetaillabelName1={DetaillabelName1}
          DetaillabelName2={DetaillabelName2}
          DetailLabelStyle1={"basic-font-style"}
          DetailLabelStyle2={"basic-font-style red-font"}
        ></ProjectAddAttributeSecond>
        <ProjectAddAttributeFinal
          cancelName={cancelName}
          addName={addName}
          btnStyle={"btn-font-main"}
          btnVarient={"outline-secondary"}
        ></ProjectAddAttributeFinal>
      </Stack>
    </>
  );
}
