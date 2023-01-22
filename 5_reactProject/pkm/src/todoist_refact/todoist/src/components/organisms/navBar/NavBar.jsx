import { IconButton, IconInput } from "components/molecules";
import style from "./NavBar.module.css";

export function NavBar() {
  const basicSize = 25;
  return (
    <div className={style.navMain}>
      <div>
        <IconButton iconName={"menu"} color={"white"} size={basicSize}></IconButton>
        <IconButton iconName={"home"} color={"white"} size={basicSize}></IconButton>
        <IconInput iconName={"search"} color={"white"} size={basicSize}></IconInput>
      </div>
      <div>
        <IconButton iconName={"add"} color={"white"} size={basicSize}></IconButton>
        <IconButton
          iconName={"whatshot"}
          color={"white"}
          size={basicSize}
        ></IconButton>
        <IconButton iconName={"help"} color={"white"} size={basicSize}></IconButton>
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
