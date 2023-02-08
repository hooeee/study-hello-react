import { IconButton, TitleButton } from "@components/molecules";
import css from "./TodoTitle.module.css";
export function TodoTitle({ name }) {
  return (
    <div>
      <TitleButton fontSize={"50px"} name={name} color={"#808080"}>
        <IconButton iconName={"mode_comment"} color={"#808080"}>
          <span className={css.spanSize}>댓글</span>
        </IconButton>
        <IconButton iconName={"person_add"} color={"#808080"}>
        <span className={css.spanSize}> 공유</span>
        </IconButton>
        <IconButton iconName={"tune"} color={"#808080"}>
        <span className={css.spanSize}>보기</span>
        </IconButton>
        <IconButton iconName={"more_horiz"} color={"#808080"}></IconButton>
      </TitleButton>
    </div>
  );
}
