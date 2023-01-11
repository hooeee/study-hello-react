import { GoogleIcon } from 'components/atoms/icon/GoogleIcon'
import { Button } from 'components/atoms/Buttons/Button'

export function IconButton({iconName, link}){
    return (
        <Button title={<GoogleIcon iconName={iconName} />}/>
    )
}