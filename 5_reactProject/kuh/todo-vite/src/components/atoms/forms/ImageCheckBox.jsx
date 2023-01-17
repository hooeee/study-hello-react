import { useRef } from "react";
import Form from "react-bootstrap/Form";
import css from "./ImageCheckBox.module.css";

export function ImageCheckBox({ imageUrl, label, name, value, onChange }) {
	const checkBox = useRef(null);

	const imageClickHandle = () => {
		checkBox.current.click();
	};

	const checked = label == value;

	const imageStyle = {
		border: checked ? "1px solid #d1453b" : "",
		background: `url(${imageUrl})`,
	};

	return (
		<div>
			<div style={imageStyle} className={css.image} onClick={imageClickHandle}></div>
			<Form.Check className={css.check} onChange={onChange} ref={checkBox} inline label={label} name={name} type={"radio"} value={label} checked={label == value} />
		</div>
	);
}
