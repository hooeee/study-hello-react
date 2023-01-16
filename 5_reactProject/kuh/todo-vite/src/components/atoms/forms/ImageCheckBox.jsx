import Form from 'react-bootstrap/Form';
import css from './ImageCheckBox.module.css'

export function ImageCheckBox({imageUrl,type}){
    return (
        <div>
          <div style={{ background : `url(${imageUrl})`}} className={css.image} >
          </div>
          <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
        </div>
    )
}