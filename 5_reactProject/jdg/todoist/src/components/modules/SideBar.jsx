import { useState } from "react";
import { Table } from "react-bootstrap";
import AddProjectModal from "../modules/AddProjectModal";
import style from "./SideBar.module.css";

export function SideBar() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
                header="Modal heading"
              >
                팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
              </AddProjectModal>
            </th>
          </tr>
        </thead>
        <tbody>프로젝트1</tbody>
        <tbody>프로젝트2</tbody>
      </Table>
    </div>
  );
}

export default SideBar;
