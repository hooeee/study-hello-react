import { useState } from "react";
import css from "./Button.module.css";

export function Button({ link, full = false, children, hoverBgColor = "#eeeeee6c", onHover, onOut }) {
	const [hover, setHover] = useState(false);
	const style = {
		display: full ? "flex" : "inline-flex",
		width: full ? "100%" : "",
		alignItems: "center",
		justifyContent: "space-between",
		background: hover ? hoverBgColor : "#f9f9f900",
	};

	return (
		<button
			onMouseOver={() => {
				setHover(true);
				onHover();
			}}
			onMouseOut={() => {
				setHover(false);
				onOut();
			}}
			className={css.button}
			style={style}>
			{children}
		</button>
	);
}
