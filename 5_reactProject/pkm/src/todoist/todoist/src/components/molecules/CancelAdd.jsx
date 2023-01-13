import { Button_k } from "../atoms/form/Button_k";
import { Container, Row, Col } from "react-bootstrap";
export function CancelAdd({ cancelName, addName }) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button_k btnName={cancelName}></Button_k>
          </Col>
          <Col>
            <Button_k btnName={addName}></Button_k>
          </Col>
        </Row>
      </Container>
    </>
  );
}
