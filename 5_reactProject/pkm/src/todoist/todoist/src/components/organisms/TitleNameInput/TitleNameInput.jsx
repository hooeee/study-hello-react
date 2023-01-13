import { MainTitle } from "../../molecules/MainTitle/MainTitle";
import { LabelInput } from "../../molecules/LabelInput/LabelInput";
import { Stack } from "react-bootstrap";
export function TitleNameInput({ labelMainName, labelName, btnName }) {
  return (
    <Stack gap={2}>
      <div>
        <MainTitle labelName={labelMainName} btnName={btnName}></MainTitle>
      </div>
      <div>
        <LabelInput labelName={labelName}></LabelInput>
      </div>
    </Stack>
  );
}
