import { useState } from "react";
import { Table } from "react-bootstrap";
import AddProjectModal from "../modules/AddProjectModal";
import style from "./SideBar.module.css";
import { addData, findData } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

export function SideBar() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  return (
    <div className={style.project_menu}>
      <Table>
        <thead>
          <tr>
            <th>프로젝트</th>
            <th>
              <button className={style.project_btn} onClick={openModal}>
                +
              </button>
              <AddProjectModal
                open={modalOpen}
                close={closeModal}
                header="프로젝트 추가"
              >
                팝업창임.
              </AddProjectModal>
            </th>
          </tr>
        </thead>
        <tbody>
          {state.modalData.map((a, i) => (
            <tr
              key={i}
              style={{ color: state.modalData[i].color }}
              onClick={() => {
                const name = state.modalData[i].name;
                // name을 Layout 으로 전달해야함
                dispatch(findData(name));
              }}
            >
              <td>{state.modalData[i].name}</td>
              <td>{state.modalData[i].show}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SideBar;
