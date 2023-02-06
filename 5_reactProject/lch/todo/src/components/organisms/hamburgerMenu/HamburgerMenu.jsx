import style from "./HamburgerMenu.module.css";
import { ImDrawer2 } from "react-icons/im";
import { BsCalendarDate, BsCalendar3 } from "react-icons/bs";
import { GrAppsRounded } from "react-icons/gr";
import IconButton from "../../atoms/iconButton/IconButton";

export default function HamburgerMenu() {
  return (
    <div className={style.main}>
      <div>
        <IconButton children={<ImDrawer2 />}></IconButton>
      </div>
      <div>
        <IconButton children={<BsCalendarDate />}></IconButton>
      </div>
      <div>
        <IconButton children={<BsCalendar3 />}></IconButton>
      </div>
      <div>
        <IconButton children={<GrAppsRounded />}></IconButton>
      </div>
    </div>
  );
}
