import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function CenterModal(props) {
    return (
        <div>
            <Modal {...props} size="100px" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">프로젝트 추가</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.children}</Modal.Body>
                <Modal.Footer>
                    <Button>Save</Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
