import {
  ButtonLabel,
  LabelDropDown,
  LabelInput,
  TitleButton,
} from "components/molecules";
import { useStore } from "./../../../store/useStore";

export function HeadModal() {
  const { setLike, setName, setColor } = useStore();
  return (
    <div>
      <TitleButton
        name={"프로젝트 추가"}
        iconName={"help"}
        color={"grey"}
      ></TitleButton>
      <LabelInput
        name={"이름"}
        bgcolor={"transparent"}
        color={"black"}
        setValue={setName}
      ></LabelInput>
      <LabelDropDown name={"색상"} setValue={setColor}></LabelDropDown>
      <ButtonLabel name={"즐겨찾기에 추가"} setValue={setLike}></ButtonLabel>
    </div>
  );
}
