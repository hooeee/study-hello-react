import { useRef} from 'react'
import Form from 'react-bootstrap/Form';
import css from './ImageCheckBox.module.css'

export function ImageCheckBox({imageUrl,type, label, name}){
  const checkBox= useRef(null);

  const imageClickHandle = () =>{
    checkBox.current.click();
  };
  return (
      <div>
        <div style={{ background : `url(${imageUrl})`}} className={css.image} onClick={imageClickHandle} >
        </div>
        <Form.Check
          ref={checkBox}
          inline
          label={label}
          name={name}
          type={type}
          id={`inline-${type}-1`}
        />
      </div>
  )
}