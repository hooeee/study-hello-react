import { Label } from "../atoms/form/Label";
import { Input } from "../atoms/form/Input";
import {Stack, Container, Row, Col} from "react-bootstrap"
export function NameInput({ labelName ,labelStyle, inputStyle}) {
  return (
    <>
        <Container>
        <Row>
          <Label labelName={labelName} labelStyle={labelStyle}></Label>
        </Row>
        <Row>
          <Input inputStyle={inputStyle}></Input>
        </Row>
        </Container>
    </>
  );
}
