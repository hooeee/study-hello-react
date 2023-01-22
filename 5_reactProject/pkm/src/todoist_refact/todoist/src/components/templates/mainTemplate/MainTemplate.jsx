import { NavBar } from "components/organisms";
import { SideMenu } from "components/organisms/sideMenu/SideMenu";
import style from "./MainTemplate.module.css";
export function MainTemplate() {
  return (
    <div>
      <NavBar></NavBar>
      <SideMenu></SideMenu>
    </div>
  );
}
