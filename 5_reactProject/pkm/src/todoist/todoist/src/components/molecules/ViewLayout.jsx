import { Label } from "../atoms/form/Label";
import { Img } from "../atoms/form/Img";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Checkbox } from "../atoms/form/Checkbox";
export function ViewLayout({
  ViewName,
  color1,
  color2,
  checkboxId1,
  checkboxId2,
  ViewLabelName1,
  ViewLabelName2,
  checkedFlag1,
  checkedFlag2,
  labelStyle,
  changeChecked1,
  changeChecked2,
  changeImage1,
  changeImage2,
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
              {checkedFlag1 == 1 ? (
                <Img
                  color="list-img-checked"
                  changeImage={changeChecked1}
                ></Img>
              ) : (
                <Img color={color1} changeImage={changeChecked1}></Img>
              )}
            </Row>
            <Row>
              <Checkbox
                id={checkboxId1}
                label={ViewLabelName1}
                checkedFlag={checkedFlag1}
                changeChecked={changeChecked1}
              />
              {/* <Form.Check type="checkbox" id="check1" label={ViewLabelName1} /> */}
            </Row>
          </Col>
          <Col className="col-align-start">
            <Row>
              {checkedFlag2 == 0 ? (
                <Img color={color2} changeImage={changeChecked2}></Img>
              ) : (
                <Img
                  color="border-img-checked"
                  changeImage={changeChecked2}
                ></Img>
              )}
            </Row>
            <Row>
              <Checkbox
                id={checkboxId2}
                label={ViewLabelName2}
                checkedFlag={checkedFlag2}
                changeChecked={changeChecked2}
              />
              {/* <Form.Check type="checkbox" id="check2" label={ViewLabelName2} /> */}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
