import { CancelAdd } from "../molecules/CancelAdd";
import { Container } from "react-bootstrap";
export function ProjectAddAttributeFinal({
  cancelName,
  addName,
  btnCancelVarient,
  btnOkVarient,
  btnStyle,
  onClickCancel,
  onClickOk,
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
          onClickCancel={onClickCancel}
          onClickOk={onClickOk}
        ></CancelAdd>
      </Container>
    </>
  );
}
