import "./App.css";
import { default as Button } from "./components/atoms/buttons/Button";
import { default as InputGroup } from "./components/atoms/radioButton/ComplateCheckButton";
import { default as IconButton } from "./components/atoms/iconButton/IconButton";
import { default as Navbar } from "./components/organisms/Navbar/Navbar";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div>
      <Button color="white" background="red">
        📗작업 추가
      </Button>
      <Button color="black" background="#eeeeee">
        취소
      </Button>
      <Button icon>test</Button>
      <InputGroup></InputGroup>
      <IconButton icon={faCoffee}></IconButton>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
