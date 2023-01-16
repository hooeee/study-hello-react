import { Button } from "../atoms/form/Button";
import { Stack, Container, Row, Col } from "react-bootstrap";
export function CancelAdd({
  cancelVariant,
  okVariant,
  btnStyle,
  cancelName,
  addName,
  onClickCancel,
  onClickOk
}) {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-align-end">
            <Stack direction="horizontal" gap={2} className="cancel-add-style">
              <Button
                variant={cancelVariant}
                className={btnStyle}
                btnName={cancelName}
                onClickBtn={onClickCancel}
              ></Button>
              <Button
                variant={okVariant}
                className={btnStyle}
                btnName={addName}
                onClickBtn={onClickOk}
              ></Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}
