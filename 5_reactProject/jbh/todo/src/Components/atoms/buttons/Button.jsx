import { default as BootButton } from "react-bootstrap/Button";

export default function Button({ title, variant }) {
    return (
        <BootButton className="button" variant={variant}>
            {title}
        </BootButton>
    );
}
