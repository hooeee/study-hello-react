import "./App.css";
import {
  Button,
  Label,
  GoogleIcon,
  CheckBoxImage,
  ModalShow,
} from "components/atoms";
import { IoMdPerson } from "react-icons/io";
import { useState } from "react";
function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">
      <ModalShow
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></ModalShow>

      <Label></Label>
      <CheckBoxImage
        label={"목록"}
        backgroundImg={
          "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/76bd6d1001a372ece03ef777813b3352.svg"
        }
      ></CheckBoxImage>
      <IoMdPerson></IoMdPerson>
      <div onClick={() => {}}>
        {" "}
        <GoogleIcon color={"red"} iconName={"whatshot"} size={100}></GoogleIcon>
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
