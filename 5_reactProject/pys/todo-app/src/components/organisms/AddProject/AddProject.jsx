import style from "./AddProject.module.css";
import { Input, Label } from "components/atoms";
import Form from "react-bootstrap/Form";
import { colors } from "store/colors";
import { ColorItem, ColorSelector } from "../ColorSelector/ColorSelector";
import { useState } from "react";
import { ImageCheckbox } from "components/molecules/";
import {
  Modal as BootstrapModal,
  Button as BootstrapButton,
} from "react-bootstrap";

export function AddProject() {
  const [projectName, setProjectName] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isBookmark, setIsBookmark] = useState(false);
  const [viewType, setViewType] = useState("list");
  const onSwitchAction = () => {
    setIsBookmark(!isBookmark);
  };
  return (
    <>
      <BootstrapModal.Header>
        <BootstrapModal.Title>프로젝트 추가</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Input
              title={"이름"}
              className={style.label}
              onChangedHandler={(e) => {
                setProjectName(e.target.value);
              }}
            ></Input>
          </Form.Group>
          <Form.Group className="mb-3">
            <Label className={style.label}>색상</Label>
            <ColorSelector
              colors={colors}
              selectedItem={selectedColor}
              onSelectedHandler={(e) => {
                setSelectedColor(e);
                console.log(e);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Switch
              type="switch"
              checked={isBookmark}
              onChange={onSwitchAction}
              label="즐겨찾기에 추가"
              className={style.bookmark}
            ></Form.Switch>
          </Form.Group>
          <Form.Group className="mb-3">
            <Label className={style.label}>보기</Label>
            <div className={`mb-2 ${style.viewType}`}>
              <div
                onClick={() => {
                  setViewType("list");
                  console.log("list");
                }}
              >
                <ImageCheckbox
                  url={
                    "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/76bd6d1001a372ece03ef777813b3352.svg"
                  }
                  overUrl={
                    "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/21ab83928e698e2cd56b75be2756e393.svg"
                  }
                  label={"목록"}
                  isChecked={viewType === "list"}
                  onClickHandler={() => {
                    setViewType("list");
                  }}
                />
              </div>
              <div
                onClick={() => {
                  setViewType("board");
                  console.log("board");
                }}
              >
                <ImageCheckbox
                  url={
                    "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/04587b33fb8e382780f4fb5787663300.svg"
                  }
                  overUrl={
                    "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/235e73c80b156de08b5182c969622c08.svg"
                  }
                  label={"보드"}
                  isChecked={viewType === "board"}
                  onClickHandler={() => {
                    setViewType("board");
                  }}
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Text className={`${style.note} text-muted`}>
              <span>
                보기는 공유 프로젝트에서 팀 멤버들 간에 동기화됩니다.
                <a href="www.naver.com">자세히 알아보기</a>
              </span>
            </Form.Text>
          </Form.Group>{" "}
        </Form>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <BootstrapButton className={style.btn_cancel}>취소</BootstrapButton>
        <BootstrapButton className={style.btn_save}>추가</BootstrapButton>
      </BootstrapModal.Footer>
    </>
  );
}
