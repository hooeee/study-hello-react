import style from "./ProjectMenuButton.module.css";

export function ProjectMenuButton({ onAddClick, onExpandClick, isExpand }) {
  return (
    <>
      <div className={style.container}>
        <h4>프로젝트</h4>
        <div className={style.button_group}>
          <span
            onClick={onAddClick}
            className="material-symbols-outlined menu_icon"
            style={{ color: "black" }}
          >
            add
          </span>
          <div onClick={onExpandClick}>
            {isExpand ? (
              <span
                className="material-symbols-outlined menu_icon"
                style={{ color: "black" }}
              >
                expand_more
              </span>
            ) : (
              <span
                className="material-symbols-outlined menu_icon"
                style={{ color: "black" }}
              >
                arrow_back_ios
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
