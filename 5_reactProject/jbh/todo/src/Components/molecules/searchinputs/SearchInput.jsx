import { useState } from "react";
import style from "./SearchInput.module.css";

export default function SearchInput() {
    const [focused, setFocused] = useState(false);
    return (
        <div
            className={style.formField}
            onFocus={() => {
                setFocused(true);
            }}
            onBlur={() => {
                setFocused(false);
            }}
        >
            <span className={style.icon}>🔍</span>
            <input className={`${style.input} ${focused ? style.inputGrow : ""}`} placeholder="search.." />
        </div>
    );
}
