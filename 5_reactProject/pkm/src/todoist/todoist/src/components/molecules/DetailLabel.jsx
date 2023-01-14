import { Stack, Container, Row, Col } from "react-bootstrap";
import { Label } from "../atoms/form/Label";
export function DetailLabel({
  DetaillabelName1,
  DetaillabelName2,
  labelStyle1,
  labelStyle2,
}) {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-align-start">
            <Stack direction="horizontal" gap={2}>
              <Label
                labelName={DetaillabelName1}
                labelStyle={labelStyle1}
              ></Label>
              <Label
                labelName={DetaillabelName2}
                labelStyle={labelStyle2}
              ></Label>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}
