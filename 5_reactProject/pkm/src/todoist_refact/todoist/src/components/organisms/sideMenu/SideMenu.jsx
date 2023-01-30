import { Label } from "components/atoms";
import { MenuItem, MenuItem1, MenuItem2 } from "components/molecules";
import style from "./SideMenu.module.css";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { setSideBarClick } from "./../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useStore } from "./../../../store/useStore";
export function SideMenu() {
  // const [sideBarClick, setSideBarClick] = useState(true);
  const dispatch = useDispatch();
  const { sideBarClick } = useSelector((state) => {
    return state;
  });
  let navigate = useNavigate();
  // console.log(checkClick);
  const { name, color, colorName, like, look, projectAdd } = useStore();
  return (
    <>
      <div className={style.main}>
        <div className={sideBarClick == true ? style.one : style.one1}>
          <div
            className={
              sideBarClick == true
                ? style.sideMenuMainOpen
                : style.sideMenuMainClose
            }
          >
            <>
              <div
                onClick={() => {
                  navigate("./manage");
                }}
              >
                <MenuItem
                  iconName={"inbox"}
                  color={"#246EE0"}
                  size={"25px"}
                  menuName={"관리함"}
                  contentCount={0}
                ></MenuItem>
              </div>
              <div
                onClick={() => {
                  navigate("./today");
                }}
              >
                <MenuItem
                  iconName={"calendar_today"}
                  color={"#028527"}
                  size={"25px"}
                  menuName={"오늘"}
                  contentCount={0}
                ></MenuItem>
              </div>
              <div
                onClick={() => {
                  navigate("./tomorrow");
                }}
              >
                <MenuItem
                  iconName={"calendar_month"}
                  color={"#692FC2"}
                  size={"25px"}
                  menuName={"다음"}
                  contentCount={0}
                ></MenuItem>
              </div>
              <div
                onClick={() => {
                  navigate("./filterLabel");
                }}
              >
                <MenuItem
                  iconName={"grid_view"}
                  color={"#EB8907"}
                  size={"25px"}
                  menuName={"필터 & 라벨"}
                  contentCount={0}
                ></MenuItem>
              </div>
            </>
            <div>
              <MenuItem2></MenuItem2>
              {projectAdd == true ? (
                <div
                  onClick={() => {
                    navigate("./project/1");
                  }}
                >
                  <MenuItem1
                    iconName={"radio_button_checked"}
                    color={color}
                    size={"25px"}
                    menuName={name}
                    contentCount={0}
                  ></MenuItem1>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className={style.two}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
