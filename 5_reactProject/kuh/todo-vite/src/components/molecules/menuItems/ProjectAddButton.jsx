
import { GoogleIcon } from 'components/atoms/icon/GoogleIcon';
import { useState } from 'react'
import css from './ProjectAddButton.module.css'

export function ProjectAddButton({projectAddClick , isOpen, openButtonClick}){
    const [hover, setHover ]  = useState(false);
    const iconSize = 23;
    const iconColor = 'black';

    return (
        <div className={css.container} onMouseOver={()=>{setHover(true)}} onMouseOut={()=>{setHover(false)}}>
            <div>프로젝트</div>
            <div className={`${css.buttonGroup} ${hover ? css.active : ''}` }>
                <div onClick={projectAddClick} >
                    <GoogleIcon color={iconColor} size={iconSize} iconName={'add'}/>
                </div>
                <div onClick={openButtonClick}>{ isOpen ? 
                    <GoogleIcon color={iconColor} size={iconSize} iconName={'expand_more'}/> : 
                    <GoogleIcon color={iconColor} size={iconSize} iconName={'expand_less'}/>}</div>
            </div>
        </div>
    )
}