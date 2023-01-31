import { IconButton, IconInput } from "components/molecules";
import style from "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSideBarClick } from "./../../../store/store";

export function NavBar() {
  const basicSize = 25;
  const dispatch = useDispatch();
  return (
    <div className={style.navMain}>
      <div>
        <div
          onClick={() => {
            dispatch(setSideBarClick());
          }}
        >
          <IconButton
            iconName={"menu"}
            color={"white"}
            size={basicSize}
          ></IconButton>
        </div>
        <IconButton
          iconName={"home"}
          color={"white"}
          size={basicSize}
        ></IconButton>
        <IconInput
          iconName={"search"}
          color={"white"}
          bgColor={"#E37267"}
          bgColorInput={"#E27267"}
          size={basicSize}
        ></IconInput>
      </div>
      <div>
        <IconButton
          iconName={"add"}
          color={"white"}
          size={basicSize}
        ></IconButton>
        <IconButton
          iconName={"whatshot"}
          color={"white"}
          size={basicSize}
        ></IconButton>
        <IconButton
          iconName={"help"}
          color={"white"}
          size={basicSize}
        ></IconButton>
        <IconButton
          iconName={"notifications"}
          color={"white"}
          size={basicSize}
        ></IconButton>
        <IconButton
          iconName={"account_circle"}
          color={"white"}
          size={basicSize}
        ></IconButton>
      </div>
    </div>
  );
}
