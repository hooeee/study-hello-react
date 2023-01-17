import { Button } from "components/atoms/buttons/Button";
import { GoogleIcon } from "components/atoms/icon/GoogleIcon";
import { useState } from "react";
import css from "./ProjectItem.module.css";

export function ProjectItem({ iconColor = "#f0f", link, children, count }) {
	const [hover, setHover] = useState(false);
	const iconColorStyle = {
		background: iconColor,
	};
	return (
		<Button
			full={true}
			hoverBgColor="#eee"
			onHover={() => {
				setHover(true);
			}}
			onOut={() => {
				setHover(false);
			}}>
			<span style={{ display: "flex", alignItems: "center" }}>
				<span className={css.circleArea}>
					<span className={css.circle} style={iconColorStyle}></span>
				</span>
				<span className={css.context}>{children}</span>
			</span>

			<span className={css.countBox}>
				{!hover ? (
					<span className={css.count}>{count}</span>
				) : (
					<span className={css.dotdot}>
						<GoogleIcon color="black" size={24} iconName={"more_horiz"} />
					</span>
				)}
			</span>
		</Button>
	);
}
