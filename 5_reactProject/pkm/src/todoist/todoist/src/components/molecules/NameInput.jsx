import { Label } from "../atoms/form/Label";
import { Input } from "../atoms/form/Input";
import { Stack } from "react-bootstrap";

export function NameInput({ labelName }) {
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
