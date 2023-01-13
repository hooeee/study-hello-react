import { Label } from "../../atoms/Label/Label";
import { Input } from "../../atoms/Input/Input";
import { Stack } from "react-bootstrap";

export function LabelInput({ labelName }) {
  return (
    <>
      <Stack gap={2}>
        <div>
          <Label labelName={labelName}></Label>
        </div>
        <div>
          <Input></Input>
        </div>
      </Stack>
    </>
  );
}
