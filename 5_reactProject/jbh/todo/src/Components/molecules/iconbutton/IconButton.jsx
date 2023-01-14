import Button from "../../atoms/buttons/Button";

export default function IconButton({ buttonName, click }) {
    return <Button title={buttonName} variant={"btn bg-transparent"} iconClick={click}></Button>;
}
