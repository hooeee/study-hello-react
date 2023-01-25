import { Input, Label } from "components/atoms";
import style from "./LabelInput.module.css";
export function LabelInput({ name, bgcolor, color }) {
  return (
    <div className={style.LabelInputMain}>
      <Label name={name}></Label>
      <Input bgcolor={bgcolor} color={color}></Input>
    </div>
  );
}
