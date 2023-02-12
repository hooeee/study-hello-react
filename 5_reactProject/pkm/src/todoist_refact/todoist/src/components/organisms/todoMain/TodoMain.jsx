import { Button, GoogleIcon, Input, Label } from "@components/atoms";
import { IconInput, MenuItem } from "@components/molecules";
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
        <>
          <div className={style.labelGroup}>
            <Input
              placeholder={"작업 이름"}
              setValue={setValue}
              value={value}
            ></Input>
            <div>
              <div
                style={{
                  marginRight: "5px",
                  fontSize: "12px",
                  display: "flex",
                  position: "relative",
                  width: "19%",
                  height: "40%",
                  border: "1px solid grey",
                  background: "white",
                  borderRadius: "5px",
                }}
              >
                <MenuItem
                  iconName={"today"}
                  color={"green"}
                  size={"21px"}
                  menuName={"오늘"}
                ></MenuItem>
              </div>
              <div
                style={{
                  marginRight: "5px",
                  fontSize: "12px",
                  display: "flex",
                  position: "relative",
                  width: "23%",
                  height: "40%",
                  border: "1px solid grey",
                  background: "white",
                  borderRadius: "5px",
                }}
              >
                <MenuItem
                  iconName={"flag"}
                  color={"grey"}
                  size={"21px"}
                  menuName={"우선순위"}
                ></MenuItem>
              </div>
              <div
                style={{
                  marginRight: "5px",
                  fontSize: "12px",
                  display: "flex",
                  position: "relative",
                  width: "23%",
                  height: "40%",
                  border: "1px solid grey",
                  background: "white",
                  borderRadius: "5px",
                }}
              >
                <MenuItem
                  iconName={"alarm"}
                  color={"grey"}
                  size={"21px"}
                  menuName={"미리알람"}
                ></MenuItem>
              </div>
              <div
                style={{
                  marginRight: "5px",
                  fontSize: "12px",
                  display: "flex",
                  position: "relative",
                  width: "10%",
                  height: "40%",
                  border: "1px solid grey",
                  background: "white",
                  borderRadius: "5px",
                }}
              >
                <MenuItem
                  iconName={"more_horiz"}
                  color={"grey"}
                  size={"21px"}
                ></MenuItem>
              </div>
            </div>
          </div>
          <div className={style.inputMain}>
            <div
              style={{
                marginRight: "5px",
                fontSize: "12px",
                display: "flex",
                position: "absolute",
                width: "25%",
                height: "50px",
                background: "white",
                borderRadius: "5px",
                right: "75%",
              }}
            >
              <MenuItem
                iconName={"inbox"}
                color={"blue"}
                size={"21px"}
                menuName={"관리함"}
              >
                <GoogleIcon iconName={"check"}></GoogleIcon>
              </MenuItem>
            </div>

            <div className={style.btnCancelMain} onClick={(e) => {}}>
              <Button variant={"!btnNavHover"} name={"취소"}></Button>
            </div>
            <div
              className={style.btnAddMain}
              onClick={() => {
                setContent(!content);
              }}
            >
              <Button variant={"btnNavHover"} name={"작업 추가"}></Button>
            </div>
          </div>
        </>
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
