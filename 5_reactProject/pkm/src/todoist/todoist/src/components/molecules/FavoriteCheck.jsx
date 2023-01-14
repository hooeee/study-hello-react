import { Form } from "react-bootstrap";
import { Label } from "../atoms/form/Label";
import { Container, Row, Col } from "react-bootstrap";
export function FavoriteCheck({ labelName }) {
  return (
    <>
      <Container>
        <Row className="basic-align-main">
          <Col className="col-align-start">
            <Form.Check type="switch" id="custom-switch" label={labelName}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}
