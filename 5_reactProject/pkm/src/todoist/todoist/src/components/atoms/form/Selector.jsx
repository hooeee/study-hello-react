import "./Selector.css";
import Select from "react-select";

export function Selector({ items ,selectStyle }) {
  return (
    <>
      <Select options={items} className={selectStyle}></Select>
    </>
  );
}
