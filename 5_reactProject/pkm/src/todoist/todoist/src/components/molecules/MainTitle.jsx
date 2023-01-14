import { Container, Row, Col } from "react-bootstrap";
import { Label } from "../atoms/form/Label";
import { Button } from "../atoms/form/Button";
export function MainTitle({ labelName, btnName, btnStyle, btnVarient }) {
  return (
    <>
      <Container>
        <Row>
          <Col sm={0}>
            <Label labelName={labelName}></Label>
          </Col>
          <Col sm={0}>
            <Button btnName={btnName} variant={btnVarient} btnStyle={btnStyle}></Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
