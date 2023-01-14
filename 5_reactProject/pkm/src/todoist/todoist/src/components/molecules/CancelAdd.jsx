import { Button } from "../atoms/form/Button";
import { Container, Row, Col } from "react-bootstrap";
export function CancelAdd({ cancelName, addName }) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button btnName={cancelName}></Button>
          </Col>
          <Col>
            <Button btnName={addName}></Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
