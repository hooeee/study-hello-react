import { MainTitle } from "../molecules/MainTitle";

export function ProjectAddTitle({ labelMainName, btnName }) {
  return (
    <>
      <MainTitle labelName={labelMainName} btnName={btnName}></MainTitle>
    </>
  );
}
