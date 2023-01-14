import { Container, Row, Col } from "react-bootstrap";
import { Label } from "../atoms/form/Label";
import { Button } from "../atoms/form/Button";
export function MainTitle({
  labelName,
  labelStyle,
  btnName,
  btnStyle,
  btnVarient,
}) {
  return (
    <>
      <Container className="border-bottom">
        <Row>
          <Col className="col-align-start">
            <Label labelName={labelName} labelStyle={labelStyle}></Label>
          </Col>
          <Col className="col-align-end">
            <Button
              btnName={btnName}
              variant={btnVarient}
              btnStyle={btnStyle}
            ></Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
