import { Label } from "./../atoms/form/Label";
import { Selector } from "./../atoms/form/Selector";
import { Container, Row, Col } from "react-bootstrap";
export function ColorInput({ labelName, labelStyle, items, selectStyle }) {
  return (
    <>
      <Container>
        <Row>
          <Label labelName={labelName} labelStyle={labelStyle}></Label>
        </Row>
        <Row>
          <Selector items={items} selectStyle={selectStyle}></Selector>
        </Row>
      </Container>
    </>
  );
}
