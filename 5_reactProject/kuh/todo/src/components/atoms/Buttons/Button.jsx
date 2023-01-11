import { default as BootButton}  from 'react-bootstrap/Button';


export function Button({title, variant = 'light'}){
    return (<BootButton variant={variant}>{title}</BootButton>)
}