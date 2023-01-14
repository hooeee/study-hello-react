import { CancelAdd } from "../molecules/CancelAdd";
import { Container } from "react-bootstrap";
export function ProjectAddAttributeFinal({
  cancelName,
  addName,
  btnCancelVarient,
  btnOkVarient,
  btnStyle,
}) {
  return (
    <>
    <Container>
      <CancelAdd
        cancelName={cancelName}
        addName={addName}
        cancelVariant={btnCancelVarient}
        okVariant={btnOkVarient}
        btnStyle={btnStyle}
      ></CancelAdd>
      </Container>
    </>
  );
}
