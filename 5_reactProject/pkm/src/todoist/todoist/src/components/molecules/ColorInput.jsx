import { Label } from "./../atoms/form/Label";
import { Selector } from "./../atoms/form/Selector";
import { Select } from "../atoms/form/Select";
import { Container, Row, Col } from "react-bootstrap";
import { items } from "./../../data/item";

export function ColorInput({
  labelName,
  labelStyle,
  selectStyle,
  selectedColor,
}) {
  return (
    <>
      <Container>
        <Row>
          <Label labelName={labelName} labelStyle={labelStyle}></Label>
        </Row>
        <Row>
          <Selector
            items={items}
            selectStyle={selectStyle}
            selectedColor={selectedColor}
          ></Selector>
        </Row>
      </Container>
    </>
  );
}
