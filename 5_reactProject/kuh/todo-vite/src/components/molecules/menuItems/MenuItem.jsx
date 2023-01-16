import { Button } from "components/atoms/buttons/Button";
import { GoogleIcon } from "components/atoms/icon/GoogleIcon";
import css from './MenuItem.module.css'

export function MenuItem({iconName, iconColor, link, children, count}){
    return (
        <Button full={true}>
            <span className={css.context + ' ' + css.fontsize24}  >
                <GoogleIcon color={iconColor} iconName={iconName} size={22}/>
                <sapn>{children}</sapn>
            </span>
            <sapn className={css.count}>{count}</sapn>
        </Button>
    )
}