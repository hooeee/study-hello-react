import css from './Button.module.css'

export function Button({link , full=false, children}){
    const style = { 
        display : full ? 'flex' : 'inline',
        width : full ? '100%' : '',
        alignItems: 'center',
        justifyContent: 'space-between'
     };
    return (
        <button className={css.button} style={style}>{children}</button>
    )
}