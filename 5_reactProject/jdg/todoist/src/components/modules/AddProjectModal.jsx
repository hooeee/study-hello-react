import React, { useState } from "react";
import Dropdown from "../atoms/DropDown";
import style from "./AddProjectModal.module.css";

const AddProjectModal = (props) => {
  const { open, close, header } = props;
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [disable, setDisable] = useState(true);
  const [selectedColor, setSelectedColor] = useState("");

  const handleSelectedColor = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className={open ? `${style.openModal} ${style.modal}` : style.modal}>
      {open ? (
        <section>
          <header>
            {header}
            <button className={style.close} onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <label>이름</label>
            <input type="text"></input>
            <label>색상</label>
            <Dropdown
              onChange={handleSelectedColor}
              value={selectedColor}
            ></Dropdown>
            <label>보기</label>
            <span>목록</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>대시보드</span>
            {/* {props.children} */}
          </main>
          <footer>
            <button className={style.close} onClick={close}>
              취소
            </button>
            &nbsp;&nbsp;
            <button
              className={`${style.add}`}
              disabled={disable}
              onClick={() => {
                alert("모달 폼 데이터 내보내서 메인화면에 뿌려줘야함");
              }}
            >
              추가
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default AddProjectModal;
