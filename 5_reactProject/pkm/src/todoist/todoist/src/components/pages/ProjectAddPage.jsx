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
  btnStyle,
  btnVarient,
}) {
  const item = [
    { value: "chocolate", label: "🍎 red" },
    { value: "strawberry", label: "🥏 blue" },
    { value: "vanilla", label: "🍯 yellow" },
  ];
  return (
    <>
      <ProjectAddTemplate
        labelMainName={"프로젝트 추가"}
        btnName={"®"}
        btnStyle={"out-line"}
        btnVarient={"out-lines"}
        NameLabelName={"이름"}
        ColorLabelName={"색상"}
        FavoriteLabelName={"즐겨찾기에 추가"}
        items={item}
        ViewName={"보기"}
        color1={"red"}
        color2={"blue"}
        ViewLabelName1={"목록"}
        ViewLabelName2={"보드"}
        DetaillabelName1={
          "보기는 공유 프로젝트에서 팀 멤버들 간에 동기화됩니다."
        }
        DetaillabelName2={"자세히 알아보기"}
        cancelName={"취소"}
        addName={"추가"}
      ></ProjectAddTemplate>
    </>
  );
}
