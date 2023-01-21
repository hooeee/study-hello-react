import style from "./IconButton.module.css";
import { GoogleIcon } from "components/atoms";
import { Button } from "components/atoms";
export function IconButton({ color, iconName, size, btnClick }) {
  return (
    <div style={{cursor:"pointer"}}
      onClick={() => {
        console.log("버튼 클릭됨");
      }}
    >
      <GoogleIcon color={color} iconName={iconName} size={size} />
    </div>
  );
}
