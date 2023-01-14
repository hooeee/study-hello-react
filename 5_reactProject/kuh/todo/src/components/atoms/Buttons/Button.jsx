import css from './Button.module.css'

export function Button({link, children}){
    return (
        <button className={css.button}>{children}</button>
    )
}