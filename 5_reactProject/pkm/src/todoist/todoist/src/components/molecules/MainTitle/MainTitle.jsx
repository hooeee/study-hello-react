import { Container, Row, Col } from "react-bootstrap";
import { Label } from "../../atoms/Label/Label";
import { Btn } from "../../atoms/Btn/Btn";
export function MainTitle({ labelName, btnName }) {
  return (
    <>
      <Container>
        <Row>
          <Col sm={0}>
            <Label labelName={labelName}></Label>
          </Col>
          <Col sm={0}>
            <Btn btnName={btnName}></Btn>
          </Col>
        </Row>
      </Container>
    </>
  );
}
