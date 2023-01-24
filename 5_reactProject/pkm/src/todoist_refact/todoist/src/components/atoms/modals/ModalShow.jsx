import { Modal, Button } from "react-bootstrap";

export function ModalShow(props) {
  return (
    <Modal
      {...props}
      size="100px"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.Head}
      {props.Body}
      <Modal.Footer>
        {props.Footer}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
