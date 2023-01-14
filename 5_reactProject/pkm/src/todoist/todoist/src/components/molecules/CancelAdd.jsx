import { Button } from "../atoms/form/Button";
import {Stack, Container, Row, Col } from "react-bootstrap";
export function CancelAdd({variant, btnStyle, cancelName, addName }) {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-align-end">
            <Stack direction="horizontal" gap={2} className="cancel-add-style">
            <Button variant={variant} className={btnStyle} btnName={cancelName}></Button>
            <Button  variant={variant} className={btnStyle} btnName={addName}></Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}
