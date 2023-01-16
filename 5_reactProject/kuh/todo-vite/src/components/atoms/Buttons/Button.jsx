import css from './Button.module.css'

export function Button({link , full=false, children, onHover, onOut}){
    const style = { 
        display : full ? 'flex' : 'inline',
        width : full ? '100%' : '',
        alignItems: 'center',
        justifyContent: 'space-between'
     };
    return (
        <button onMouseOver={onHover} onMouseOut={onOut} className={css.button} style={style}>{children}</button>
    )
}