import { Button } from "components/atoms/buttons/Button";
import { GoogleIcon } from "components/atoms/icon/GoogleIcon";

export function ProjectItem({iconColor, link, children, count}){
    return (
        <Button full={true}>
            <span style={{display : 'flex' , alignItems:'center'}}>
                <span>{iconColor}</span>
                <sapn>{children}</sapn>
            </span>
            <sapn>{count}</sapn>
        </Button>
    )
}