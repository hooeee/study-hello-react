import Header from "../../organisms/header/Header";
import HamburgerMenu from "../../organisms/hamburgerMenu/HamburgerMenu";
import style from "./MainPage.module.css";

export default function MainPage() {
  return (
    <div className={style.main}>
      <div className="header">
        <Header></Header>
      </div>
      <div className="hamburger_menu">
        <HamburgerMenu></HamburgerMenu>
      </div>
    </div>
  );
}
