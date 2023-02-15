import React, { useState } from "react";
import Dropdown from "../atoms/DropDown";
import ShowPanel from "../atoms/ShowPanel";
import style from "./AddProjectModal.module.css";
import { useSelector } from "react-redux";
import { addData } from "../../store/store";
import { useDispatch } from "react-redux";

const AddProjectModal = (props) => {
  const { open, close, header } = props;
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [disable, setDisable] = useState(true);
  const [selectedColor, setSelectedColor] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedType, setSelectedType] = useState("");
  // const [checked, setChecked] = useState(false);

  const handleChecked = (e) => {
    console.log(e);
    // setSelectedType(e);

    if (e == true) {
      // if (type )
    }
  };

  const handleSelectedColor = (e) => {
    setSelectedColor(e);
  };

  // const onSelectedType = () => {
  //   if (ischecked) {
  //     if (type == "보드") {
  //       setSelectedType("board");
  //     } else if (type == "목록") {
  //       setSelectedType("list");
  //     }
  //   }
  // };

  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

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
            <input
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              value={inputValue}
            ></input>
            <label>색상</label>
            <Dropdown handleSelectedColor={handleSelectedColor}></Dropdown>
            <label>보기</label>
            <ShowPanel
              src={process.env.PUBLIC_URL + "/list.png"}
              type="목록"
              handleChecked={handleChecked}
            ></ShowPanel>
            <ShowPanel
              src={process.env.PUBLIC_URL + "/board.png"}
              type="보드"
              handleChecked={handleChecked}
            ></ShowPanel>
          </main>
          <footer>
            <button className={style.close} onClick={close}>
              취소
            </button>
            &nbsp;&nbsp;
            <button
              className={`${style.add}`}
              // disabled={disable}
              onClick={() => {
                // alert("모달 폼 데이터 내보내서 메인화면에 뿌려줘야함");
                dispatch(
                  addData({
                    name: inputValue,
                    color: selectedColor,
                    show: selectedType,
                  })
                );
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
