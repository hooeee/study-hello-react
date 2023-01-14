import { MainTitle } from "../molecules/MainTitle";

export function ProjectAddTitle({ labelMainName, btnName, btnStyle, btnVarient }) {
  return (
    <>
      <MainTitle labelName={labelMainName} btnName={btnName} btnStyle={btnStyle} btnVarient={btnVarient}></MainTitle>
    </>
  );
}
