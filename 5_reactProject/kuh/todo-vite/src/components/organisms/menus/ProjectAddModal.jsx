import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Window } from 'components/atoms/modals/Window' 
import { ImageCheckBox } from 'components/atoms/forms/ImageCheckBox';
import { ColorSelector } from 'components/molecules/forms/ColorSelector';
import css from './ProjectAddModal.module.css';


function ProjectAddFrom (){
  const type = 'radio';
  const images = [ 
    'https://d3ptyyxy2at9ui.cloudfront.net/assets/images/76bd6d1001a372ece03ef777813b3352.svg',
    'https://d3ptyyxy2at9ui.cloudfront.net/assets/images/04587b33fb8e382780f4fb5787663300.svg'
  ]

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={css.label}>이름</Form.Label>
        <Form.Control size="sm" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={css.label}>색상</Form.Label>
        <ColorSelector/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
          className={css.checkBoxLabel}
          type="switch"
          id="custom-switch"
          label="즐겨찾기에 추가"
        />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={css.label}>보기</Form.Label>
        <div key={`inline-${type}`} className="mb-2">
          <div className={css.radioSection}>
            <ImageCheckBox imageUrl={images[0]} type={'radio'} label={'목록'} name={'type1'} />
          </div>
          <div className={css.radioSection}>
            <ImageCheckBox imageUrl={images[1]} type={'radio'}  label={'보드'} name={'type1'}/>
          </div>
        </div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Text className={`${css.comment} text-muted`}>
        보기는 공유 프로젝트에서 팀 멤버들 간에 동기화됩니다.  
        </Form.Text>
        <Form.Text className={`${css.commentRed}`}> 자세히 알아보기</Form.Text>
      </Form.Group>
  </Form>
  )
}

const Footer = ({onHide}) => <Button onClick={onHide}>Close</Button>
const Title = () => (
  <div>
    <h5 className={css.title}>프로젝트 추가</h5>
  </div>
)

export function ProjectAddModal(props) {
  return (
    <Window
      {...props}
      title={<Title/>}
      body={<ProjectAddFrom/>}
      footer={<Footer onHide={props.onHide}/>}
    >
    </Window>
  );
}