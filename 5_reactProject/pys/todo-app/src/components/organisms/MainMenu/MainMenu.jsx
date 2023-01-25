import { Modal } from "components/atoms";
import { MenuButton } from "components/molecules";
import { AddProject } from "components/organisms";
import { ProjectMenuButton } from "../ProjectMenuButton/ProjectMenuButton";
import style from "./MainMenu.module.css";
import { useState } from "react";

export function MainMenu() {
  const [isExpand, setExpand] = useState(false);
  const [showAddProject, setAddProject] = useState(false);
  return (
    <>
      <div className={style.main_menus}>
        <MenuButton
          icon="inventory_2"
          label="관리함"
          color={"#246fe0"}
          count="10"
        />
        <MenuButton icon="today" label="오늘" color={"#058527"} />
        <MenuButton icon="calendar_month" label="다음" color={"#692fc2"} />
        <MenuButton icon="grid_view" label="필터&라벨" color={"#eb8909"} />
      </div>

      <div className={style.project_menus}>
        <ProjectMenuButton
          onAddClick={() => {
            setAddProject(true);
          }}
          onExpandClick={() => {
            setExpand(!isExpand);
          }}
          isExpand={isExpand}
        />
        <div className={isExpand ? style.projects_open : style.projects_close}>
          <MenuButton icon="today" label="오늘" color={"#058527"} />
          <MenuButton icon="today" label="오늘" color={"#058527"} />
          <MenuButton icon="today" label="오늘" color={"#058527"} />
          <MenuButton icon="today" label="오늘" color={"#058527"} />
          <MenuButton icon="today" label="오늘" color={"#058527"} />
          <MenuButton icon="today" label="오늘" color={"#058527"} />
        </div>

        <Modal
          show={showAddProject}
          onHide={() => {
            setAddProject(false);
          }}
        ></Modal>
      </div>
    </>
  );
}
