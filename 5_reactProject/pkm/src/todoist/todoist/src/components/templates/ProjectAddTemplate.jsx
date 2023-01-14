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
  cancelName,
  addName,
  btnStyle,
  btnVarient,
}) {
  return (
    <>
      <Stack>
        <ProjectAddTitle
          labelMainName={labelMainName}
          btnName={btnName}
          btnStyle={btnStyle}
          btnVarient={btnVarient}
        ></ProjectAddTitle>
        <ProjectAddAttributeFirst
          NameLabelName={NameLabelName}
          ColorLabelName={ColorLabelName}
          FavoriteLabelName={FavoriteLabelName}
          items={items}
        ></ProjectAddAttributeFirst>
        <ProjectAddAttributeSecond
          ViewName={ViewName}
          color1={color1}
          color2={color2}
          ViewLabelName1={ViewLabelName1}
          ViewLabelName2={ViewLabelName2}
          DetaillabelName1={DetaillabelName1}
          DetaillabelName2={DetaillabelName2}
        ></ProjectAddAttributeSecond>
        <ProjectAddAttributeFinal
          cancelName={cancelName}
          addName={addName}
        ></ProjectAddAttributeFinal>
      </Stack>
    </>
  );
}
