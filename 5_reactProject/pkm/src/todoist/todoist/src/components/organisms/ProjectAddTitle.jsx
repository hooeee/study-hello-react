import { MainTitle } from "../molecules/MainTitle";
import { Container } from "react-bootstrap";
export function ProjectAddTitle({
  labelMainName,
  labelStyle,
  btnName,
  btnStyle,
  btnVarient,
}) {
  return (
    <>
      <Container>
        <MainTitle
          labelName={labelMainName}
          labelStyle={labelStyle}
          btnName={btnName}
          btnStyle={btnStyle}
          btnVarient={btnVarient}
        ></MainTitle>
      </Container>
    </>
  );
}
