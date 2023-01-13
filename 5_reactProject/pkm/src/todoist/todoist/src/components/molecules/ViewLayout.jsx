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
}) {
  return (
    <>
      <Container>
        <Row>
          <Label labelName={ViewName}></Label>
        </Row>
        <Row>
          <Col>
            <Row>
              <Img color={color1}></Img>
              <Form.Check type="checkbox" id="check1" label={ViewLabelName1} />
            </Row>
          </Col>
          <Col>
            <Row>
              <Img color={color2}></Img>
              <Form.Check type="checkbox" id="check2" label={ViewLabelName2} />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
