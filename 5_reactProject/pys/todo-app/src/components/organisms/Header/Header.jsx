import "./Header.css";
import { sidebarAction } from "store/store";
import { useState } from "react";
import { Button } from "components/atoms/index";
import { useDispatch } from "react-redux";
import { IconButton } from "components/molecules";

export function Header() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const dispatch = useDispatch();

  const onClickMenu = () => {
    setIsOpenSidebar(!isOpenSidebar);
    dispatch(sidebarAction(isOpenSidebar));
  };

  return (
    <div className="top_bar">
      <div className="top_bar_inner">
        <div className="left_control">
          <IconButton icon="menu" className="menu_btn" onClick={onClickMenu} />
          <IconButton icon="home" className="menu_btn" />
        </div>
        <div className="right_control">
          <IconButton icon="Add" className="menu_btn" onClick={onClickMenu} />
          <IconButton
            icon="data_exploration"
            className="menu_productivity_btn"
            onClick={onClickMenu}
          >
            0/5
          </IconButton>
          <IconButton icon="help" className="menu_btn" onClick={onClickMenu} />
          <IconButton
            icon="Notifications"
            className="menu_btn"
            onClick={onClickMenu}
          />
          <IconButton icon="home" className="menu_btn" onClick={onClickMenu} />
        </div>
      </div>
    </div>
  );
}
