import Modal from 'react-bootstrap/Modal';

export function Window(props){
  const headerStyle = {padding : '12px 8px 11px 16px', borderBottom : '#f5f5f5 1px solid'};
    return (
        <Modal
          {...props}
          aria-labelledby="example-modal-sizes-title-sm"
          centered
        >
          <Modal.Header style={headerStyle}>
            <Modal.Title id="contained-Modal-title-vcenter">
                {props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            {props.body}
          </Modal.Body>
          <Modal.Footer>
            {props.footer}
          </Modal.Footer>
        </Modal>
    )
}