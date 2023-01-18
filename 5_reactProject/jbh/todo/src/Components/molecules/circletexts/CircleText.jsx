import style from "./CircleText.module.css";

export default function CircleText({ color, name }) {
    return (
        <div className={style.item}>
            <div className={style.circle} style={{ backgroundColor: color }}></div>
            <div>{name}</div>
        </div>
    );
}
