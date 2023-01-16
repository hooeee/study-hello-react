import style from "./SelectBox.module.css";

export default function SelectBox() {
    const OPTIONS = [
        { value: "veryred", name: "veryred" },
        { value: "red", name: "red" },
        { value: "orange", name: "orange" },
        { value: "yellow", name: "yellow" },
        { value: "olivegreen", name: "olivegreen" },
        { value: "rimegreen", name: "rimegreen" },
        { value: "green", name: "green" },
        { value: "mintgreen", name: "mintgreen" },
        { value: "teel", name: "teel" },
        { value: "skyblue", name: "skyblue" },
        { value: "lightblue", name: "lightblue" },
        { value: "blue", name: "blue" },
        { value: "grafe", name: "grafe" },
        { value: "violet", name: "violet" },
        { value: "lavander", name: "lavander" },
        { value: "magenta", name: "magenta" },
        { value: "shamen", name: "shamen" },
        { value: "chacol", name: "chacol" },
        { value: "gray", name: "gray" },
        { value: "thope,", name: "thope" },
    ];

    const customStyles = {
        singleValue: () => ({
            height: "100%",
            color: "#08699B",
            paddingTop: "3px",
        }),
    };

    return (
        <div>
            <div className={style.circle}></div>
            <select className={style.select} customStyles={customStyles}>
                {OPTIONS.map((option) => (
                    <option key={option.key} value={option.value}>
                        <div>
                            <div className={style.circle}></div>
                            {option.name}
                        </div>
                    </option>
                ))}
            </select>
        </div>
    );
}
