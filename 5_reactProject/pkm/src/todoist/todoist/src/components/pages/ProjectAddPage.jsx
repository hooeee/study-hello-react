import { ProjectAddTemplate } from "../templates/ProjectAddTemplate";

export function ProjectAddPage({
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
}) {
  return (
    <>
      <ProjectAddTemplate
        labelMainName={labelMainName}
        btnName={btnName}
        NameLabelName={NameLabelName}
        ColorLabelName={ColorLabelName}
        FavoriteLabelName={FavoriteLabelName}
        items={items}
        ViewName={ViewName}
        color1={color1}
        color2={color2}
        ViewLabelName1={ViewLabelName1}
        ViewLabelName2={ViewLabelName2}
        DetaillabelName1={DetaillabelName1}
        DetaillabelName2={DetaillabelName2}
        cancelName={cancelName}
        addName={addName}
      ></ProjectAddTemplate>
    </>
  );
}
