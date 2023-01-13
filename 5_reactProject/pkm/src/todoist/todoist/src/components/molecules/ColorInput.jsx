import { Label } from "./../atoms/form/Label";
import { Selector } from "./../atoms/form/Selector";
export function ColorInput({ labelName, items }) {
  return (
    <>
      <Label labelName={labelName}></Label>
      <Selector items={items}></Selector>
    </>
  );
}
