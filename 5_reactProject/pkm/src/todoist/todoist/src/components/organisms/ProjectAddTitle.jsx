import { MainTitle } from "../molecules/MainTitle";

export function ProjectAddTitle({ labelMainName, labelStyle, btnName, btnStyle, btnVarient }) {
  return (
    <>
      <MainTitle labelName={labelMainName} labelStyle={labelStyle} btnName={btnName} btnStyle={btnStyle} btnVarient={btnVarient}></MainTitle>
    </>
  );
}
