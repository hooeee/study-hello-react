import { Label } from "../atoms/form/Label";
import { Img } from "../atoms/form/Img";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
export function ViewLayout({
  ViewName,
  color1,
  color2,
  ViewLabelName1,
  ViewLabelName2,
  labelStyle,
}) {
  return (
    <>
      <Container>
        <Row>
          <Label labelName={ViewName} labelStyle={labelStyle}></Label>
        </Row>
        <Row>
          <Col className="col-align-start">
            <Row>
              <Img color={color1}></Img>
            </Row>
            <Row>
              <Form.Check type="checkbox" id="check1" label={ViewLabelName1} />
            </Row>
          </Col>
          <Col className="col-align-start">
            <Row>
              <Img color={color2}></Img>
            </Row>
            <Row>
              <Form.Check type="checkbox" id="check2" label={ViewLabelName2} />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
