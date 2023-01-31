import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export function MenuButton() {
  const [visible, setVisible] = useState(false);

  return (
    <button className="menuButton" onClick={() => {}}>
      Menu
    </button>
  );
}

export default MenuButton;
