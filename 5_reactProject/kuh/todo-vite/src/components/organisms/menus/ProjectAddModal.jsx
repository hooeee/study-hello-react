import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ImageCheckBox } from 'components/atoms/forms/ImageCheckBox';
import css from './ProjectAddModal.module.css'

export function ProjectAddModal(props) {
  const type = 'radio';
  const images = [ 
    'https://d3ptyyxy2at9ui.cloudfront.net/assets/images/76bd6d1001a372ece03ef777813b3352.svg',
    'https://d3ptyyxy2at9ui.cloudfront.net/assets/images/04587b33fb8e382780f4fb5787663300.svg'
  ]
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          프로젝트 추가
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이름</Form.Label>
            <Form.Control type="email" size="sm" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>색상</Form.Label>
            <Form.Control type="password" size="sm" placeholder="Password" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>보기</Form.Label>

            <div key={`inline-${type}`} className="mb-2">
              <div className={css.radioSection}>
                <ImageCheckBox imageUrl={images[0]} type={type}/>
              </div>
              <div className={css.radioSection}>
                <ImageCheckBox imageUrl={images[1]} type={type}/>
              </div>
            </div>

            {/* <Form.Control type="password" size="sm" placeholder="Password" /> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check 
              type="switch"
              id="custom-switch"
              label="즐겨찾기에 추가"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Text className="text-muted">
            보기는 공유 프로젝트에서 팀 멤버들 간에 동기화됩니다. 
            </Form.Text>
            <Form.Text className="text-muted">
            자세히 알아보기
            </Form.Text>
          </Form.Group>


          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}