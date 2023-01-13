import { Form } from "react-bootstrap";
import "./Selector.css";
import Select from "react-select";

export function Selector({ items }) {
  return (
    <>
      <Select options={items}></Select>
    </>
  );
}
