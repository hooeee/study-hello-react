import { Button, Input } from "@components/atoms";
import { IconButton, TitleButton } from "@components/molecules";
import { useStore } from "@store";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./TodoTitle.module.css";
export function TodoTitle({ names }) {
  const [changeTitle, setChangeTitle] = useState(0);
  const [value, setValue] = useState("");

  const { project, setProjectName } = useStore();
  const { id } = useParams();

  useEffect(() => {
    setValue(project[id].name);
  }, []);
  useEffect(() => {
    setValue("");
  }, [changeTitle]);
  return (
    <>
      {changeTitle == 1 ? (
        <div>
          <TitleButton
            onClick={() => {
              setChangeTitle(!changeTitle);
              console.log(changeTitle);
            }}
          >
            <Input setValue={setValue} value={value}></Input>
            <div className={css.btnGrey}>
              <Button
                onClick={() => {
                  setChangeTitle(!changeTitle);
                  setValue(project[id].name);
                  console.log(changeTitle);
                }}
                name="취소"
                fontColor={"black"}
              ></Button>
            </div>
            <div className={css.btnRed}>
              <Button
                onClick={() => {
                  setChangeTitle(!changeTitle);
                  setProjectName(id, value);
                  setValue(value);
                  console.log(changeTitle);
                }}
                name="수정"
                fontColor={"white"}
              ></Button>
            </div>
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
      ) : (
        <div>
          <TitleButton
            onClick={() => {
              setChangeTitle(!changeTitle);
              console.log(changeTitle);
            }}
            fontSize={"50px"}
            name={project[id].name}
            color={"#808080"}
          >
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
      )}
    </>
  );
}
