import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export function MenuButton() {
  const [isSideBar, SetIsSideBar] = useState(true);

  return (
    <button
      className="menuButton"
      onClick={() => {
        SetIsSideBar(!isSideBar);
      }}
    >
      Menu
    </button>
  );
}

export default MenuButton;
