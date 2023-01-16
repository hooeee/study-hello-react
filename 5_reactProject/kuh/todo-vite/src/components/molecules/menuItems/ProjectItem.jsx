import { Button } from "components/atoms/buttons/Button";
import css from './ProjectItem.module.css'

export function ProjectItem({iconColor = '#f0f', link, children, count}){
    const iconColorStyle = {
        background : iconColor
    }
    const hoverHandle = () =>{
        console.log('hover');
    }
    return (
        <Button full={true} onHover={hoverHandle}>
            <span style={{display : 'flex' , alignItems:'center'}}>
                <span className={css.circleArea}>
                    <span className={css.circle} style={iconColorStyle}></span>
                </span>
                <span>{children}</span>
            </span>
            <span>{count}</span>
        </Button>
    )
}