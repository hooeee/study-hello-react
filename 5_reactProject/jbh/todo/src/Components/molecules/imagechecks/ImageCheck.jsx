import Form from "react-bootstrap/Form";
import { useRef } from "react";

export default function ImageCheck({ divImage, format, divCheckImage, label, todoFormat, onTodoFormatChange }) {
    const clickImage = useRef();

    const triggerHandle = () => {
        clickImage.current.click();
    };
    return (
        <div>
            <div className={`${divImage} ${todoFormat === format ? divCheckImage : ""}`} onClick={triggerHandle} />
            <Form.Check
                ref={clickImage}
                inline
                label={label}
                name="imageGroup"
                type={"radio"}
                id={`inline-radio-1`}
                value={format}
                checked={todoFormat === format}
                onChange={onTodoFormatChange}
            />
        </div>
    );
}
