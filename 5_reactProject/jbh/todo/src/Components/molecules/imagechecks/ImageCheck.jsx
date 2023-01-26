import style from "./ImageCheck.module.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";

export default function ImageCheck({ divImage, format, divCheckImage, label }) {
    const [todoFormat, setTodoFormat] = useState("todoList");
    const onTodoFormatChange = ({ target: { value } }) => {
        console.log(value);
        setTodoFormat(value);
    };
    return (
        <div>
            <div className={`${divImage} ${todoFormat === format ? divCheckImage : ""}`} />
            <Form.Check
                inline
                label={label}
                name="imageGroup"
                type={"radio"}
                id={`inline-radio-1`}
                value={format}
                checked={todoFormat === { format }}
                onChange={onTodoFormatChange}
            />
        </div>
    );
}
