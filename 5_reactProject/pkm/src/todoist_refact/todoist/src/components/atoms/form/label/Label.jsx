
import style from "./Label.module.css"
export function Label ({name}){
    return (
    <>
    <label className={style.labelMain} >{name}</label>
    </>
    )
}