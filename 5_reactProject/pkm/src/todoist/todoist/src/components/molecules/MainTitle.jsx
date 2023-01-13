import { Container, Row, Col } from "react-bootstrap";
import { Label } from "../atoms/form/Label";
import { Button_k } from "../atoms/form/Button_k";
export function MainTitle({ labelName, btnName }) {
  return (
    <>
      <Container>
        <Row>
          <Col sm={0}>
            <Label labelName={labelName}></Label>
          </Col>
          <Col sm={0}>
            <Button_k btnName={btnName}></Button_k>
          </Col>
        </Row>
      </Container>
    </>
  );
}
