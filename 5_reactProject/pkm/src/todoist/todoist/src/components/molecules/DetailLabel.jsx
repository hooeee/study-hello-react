import { Container, Row, Col } from "react-bootstrap";
import { Label } from "../atoms/form/Label";
export function DetailLabel({ DetaillabelName1, DetaillabelName2 }) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Label labelName={DetaillabelName1}></Label>
          </Col>
          <Col>
            <Label labelName={DetaillabelName2}></Label>
          </Col>
        </Row>
      </Container>
    </>
  );
}
