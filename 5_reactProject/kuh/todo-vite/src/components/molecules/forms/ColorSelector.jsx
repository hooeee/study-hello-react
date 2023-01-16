import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import css from './ColorSelector.module.css'

export function ColorSelectorItem({color, title}){
  return (
    <div className={css.colorItemContainer}>
      <span className={css.colorCircle} style={{background : color}}></span>
      <span>{title}</span>
    </div>
  )
}

export function ColorSelector() {
  const [selectedColor , setSelectedColor ] = useState(null);
  const items = [
    { title : 'red' , color : 'red'},
    { title : 'gray' , color : 'gray'},
    { title : 'black' , color : 'black'},
  ]

  const selectedColorHandle = (colorObject) =>{
    setSelectedColor({...colorObject});
  }

  return (
    <Dropdown>
      <Dropdown.Toggle size='sm' className={css.selectredArea} >
        {selectedColor ? <ColorSelectorItem color={selectedColor.color} title={selectedColor.title}/> : <ColorSelectorItem color={''} title={'ㅤ'}/> }
      </Dropdown.Toggle>

      <Dropdown.Menu className={css.selectorItemContainer}>
        {items.map(t=> <Dropdown.Item className={css.selectorItemBox} onClick={()=>{selectedColorHandle(t);}} key={t.color}>
          <ColorSelectorItem color={t.color} title={t.title} />
        </Dropdown.Item>)}
      </Dropdown.Menu>
    </Dropdown>
  );
}
