import {
  ButtonLabel,
  LabelDropDown,
  LabelInput,
  TitleButton,
} from "components/molecules";

export function HeadModal() {
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
      ></LabelInput>
      <LabelDropDown name={"색상"}></LabelDropDown>
      <ButtonLabel name={"즐겨찾기에 추가"}></ButtonLabel>
    </div>
  );
}
