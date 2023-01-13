import { Form } from "react-bootstrap";
import { Label } from "../atoms/form/Label";
import { Container, Row, Col } from "react-bootstrap";
export function FavoriteCheck({ labelName }) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form.Check type="switch" id="custom-switch" />
          </Col>
          <Col>
            <Label labelName={labelName}></Label>
          </Col>
        </Row>
      </Container>
    </>
  );
}
