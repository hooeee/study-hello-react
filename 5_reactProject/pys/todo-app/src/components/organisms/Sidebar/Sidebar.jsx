import { MenuButton } from "components/molecules";
import { MainMenu } from "components/organisms";
import style from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <div className={style.content}>
      <div className={style.main_menu}>
        <MainMenu />
      </div>

      <div className={style.project_menus}>
        <MenuButton></MenuButton>
      </div>
    </div>
  );
}
