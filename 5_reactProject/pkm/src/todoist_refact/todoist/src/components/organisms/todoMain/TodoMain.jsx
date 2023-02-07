import { Button, Input } from "@components/atoms";
import { IconInput } from "@components/molecules";
import { useState } from "react";
import style from "./TodoMain.module.css";
import { useStore } from "@store";
export function TodoMain({ isInput }) {
  const [content, setContent] = useState(true);
  const [checkClick, setCheckClick] = useState(true);
  const [value, setValue] = useState("");
  const { project, setTodoListDelete } = useStore();

  return (
    <div>
      {content == true ? (
        <div className={style.inputMain}>
          <Input setValue={setValue} value={value}></Input>
          <div className={style.btnCancelMain} onClick={(e) => {}}>
            <Button variant={"!btnNavHover"} name={"취소"}></Button>
          </div>
          <div
            className={style.btnAddMain}
            onClick={() => {
              setContent(!content);
            }}
          >
            <Button variant={"btnNavHover"} name={"추가"}></Button>
          </div>
        </div>
      ) : (
        <div>
          {checkClick == true ? (
            <IconInput
              onClick={() => {
                setCheckClick(!checkClick);
              }}
              iconName={"circle"}
              color={"black"}
              size={"25px"}
              bgColor={"transparent"}
              value={value}
              setValue={setValue}
              fontColor={"black"}
            ></IconInput>
          ) : (
            <IconInput
              onClick={() => {
                setCheckClick(!checkClick);
              }}
              iconName={"radio_button_checked"}
              color={"red"}
              size={"25px"}
              bgColor={"transparent"}
              value={value}
              setValue={setValue}
              fontColor={"grey"}
            ></IconInput>
          )}
        </div>
      )}
    </div>
  );
}
