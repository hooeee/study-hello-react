import { Modal } from "react-bootstrap";

export function ModalShow(props) {
  console.log(props.show);
  return (
    <Modal {...props} size="100px" aria-labelledby="ModalTest" centered>
      {props.headmodal}
      {props.bodymodal}
      <Modal.Footer>{props.footermodal}</Modal.Footer>
    </Modal>
  );
}
