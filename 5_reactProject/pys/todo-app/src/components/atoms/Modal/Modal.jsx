import { Modal as BootstrapModal } from "react-bootstrap";

export function Modal(props) {
  return (
    <BootstrapModal
      {...props}
      size={props.size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.children}
    </BootstrapModal>
  );
}
