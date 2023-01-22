import { Label } from "components/atoms";
import { MenuItem } from "components/molecules";
import style from "./SideMenu.module.css";
import { useState } from "react";
export function SideMenu() {
  const [btnC, setBtnC] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setBtnC(!btnC);
        }}
      >
        test SideBar
      </button>
      <div
        className={
            btnC == true ? style.sideMenuMainOpen : style.sideMenuMainClose
        }
      >
        <div>
          <MenuItem
            iconName={"inbox"}
            color={"#246EE0"}
            size={"25px"}
            menuName={"관리함"}
            contentCount={0}
          ></MenuItem>
          <MenuItem
            iconName={"calendar_today"}
            color={"#028527"}
            size={"25px"}
            menuName={"오늘"}
            contentCount={0}
          ></MenuItem>
          <MenuItem
            iconName={"calendar_month"}
            color={"#692FC2"}
            size={"25px"}
            menuName={"다음"}
            contentCount={0}
          ></MenuItem>
          <MenuItem
            iconName={"grid_view"}
            color={"#EB8907"}
            size={"25px"}
            menuName={"필터 & 라벨"}
            contentCount={0}
          ></MenuItem>
        </div>
        <div>
          <Label name={"프로젝트"}> </Label>
          <MenuItem
            iconName={"radio_button_checked"}
            color={"blue"}
            size={"25px"}
            menuName={"개인"}
            contentCount={0}
          ></MenuItem>
        </div>
      </div>
    </>
  );
}
