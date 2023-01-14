import { default as BootButton } from "react-bootstrap/Button";

export default function Button({ title, variant, iconClick }) {
    return (
        <BootButton className="button" variant={variant} onClick={iconClick}>
            {title}
        </BootButton>
    );
}
