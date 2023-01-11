import css from './Header.module.css'
import { IconButton } from  'components/molecules/IconButton'
import { Button } from 'components/atoms/Buttons/Button'
import { GoogleIcon } from 'components/atoms/icon/GoogleIcon'

export function Header(){
    return (
        <div className={css.container}>
            
            <div>
                <IconButton iconName={'menu'}/>
            </div>
            <div>345</div>
        </div>
    )
}