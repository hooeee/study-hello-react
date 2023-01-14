import { ProjectAddTemplate } from "../templates/ProjectAddTemplate";
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import {BsCircle} from "react-icons/bs"
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
  addName
}) {
  const color = <Circle color={"blue"}/>

  const item = [
    { value: "베리레드", label: "🔴 베리 레드"},
    { value: "레드", label: "🔴 레드" },
    { value: "오렌지", label: "🟠 오렌지" },
    { value: "올리브그린", label: "🟢 올리브 그린" },
  ];
  return (
    <>
      <ProjectAddTemplate
        labelMainName={"프로젝트 추가"}
        btnName={<AiOutlineQuestionCircle/>}
        NameLabelName={"이름"}
        ColorLabelName={"색상"}
        FavoriteLabelName={"즐겨찾기에 추가"}
        items={item}
        ViewName={"보기"}
        color1={"list-img "}
        color2={"border-img "}
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

export function Circle({color}){
  return(
    <div style={{"width":"15px", "height":"15px", "border-radius":"50%", "background":color}}></div>
  )
}