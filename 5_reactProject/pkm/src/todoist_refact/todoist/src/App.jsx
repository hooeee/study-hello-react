import "./App.css";
import {
  Button,
  Label,
  GoogleIcon,
  CheckBoxImage,
  ModalShow,
} from "components/atoms";
import { IconButton } from "components/molecules";
import { IoMdPerson } from "react-icons/io";
import { useState } from "react";
import { MenuItem } from "components/molecules";
function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">
      <MenuItem
        color={"red"}
        iconName={"home"}
        size={30}
        menuName={"관리함홈"}
        contentCount={15}
      ></MenuItem>
      <ModalShow
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></ModalShow>
      <IconButton color={"red"} iconName={"home"} size={60}></IconButton>
      <IconButton color={"black"} iconName={"menu"} size={30}></IconButton>
      <Label></Label>
      <CheckBoxImage
        label={"목록"}
        backgroundImg={
          "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/76bd6d1001a372ece03ef777813b3352.svg"
        }
      ></CheckBoxImage>
      <IoMdPerson></IoMdPerson>
      <div onClick={() => {}}>
        <GoogleIcon color={"red"} iconName={"menu"} size={100}></GoogleIcon>
      </div>
      <Button
        name={"ddd"}
        styCss={"style.btnSize"}
        onClick={() => {
          setModalShow(true);
        }}
      ></Button>
    </div>
  );
}

export default App;
