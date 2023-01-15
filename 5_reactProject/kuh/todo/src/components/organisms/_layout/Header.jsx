import css from './Header.module.css'
import { Button } from 'components/atoms/buttons/Button'
import { GoogleIcon } from 'components/atoms/icon/GoogleIcon'

export function Header(){
    const iconSize = 23;

    return (
        <div className={css.container}>

            <div>
                <Button><GoogleIcon size={iconSize} iconName={'menu'} /></Button>
                <Button><GoogleIcon size={iconSize} iconName={'home'} /></Button>
            </div>
            <div>
                <Button><GoogleIcon size={iconSize} iconName={'add'} /></Button>
                <Button><GoogleIcon size={iconSize} iconName={'data_exploration'} /> <span>0/5</span></Button>
                <Button><GoogleIcon size={iconSize} iconName={'help'} /></Button>
                <Button><GoogleIcon size={iconSize} iconName={'notifications'} /></Button>
            </div>
        </div>
    )
}