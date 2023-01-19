import "./App.css";
import { Button, Label, GoogleIcon } from "components/atoms";
import { IoMdPerson } from "react-icons/io";
function App() {
  return (
    <div className="App">
      <IoMdPerson></IoMdPerson>
     <div onClick={()=>{
      
     }}> <GoogleIcon color={"pink"} iconName={"menu"} size={100}></GoogleIcon>
     </div>
      <Button name={"ddd"} styCss={"style.btnSize"}></Button>
    </div>
  );
}

export default App;
