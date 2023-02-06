import style from "./IconButton.module.css";
import { GoogleIcon } from "@components/atoms";
import { Button } from "@components/atoms";
export function IconButton({ color, iconName, size, btnClick }) {
  return (
    <Button variant={"btnNavHover"}>
      <GoogleIcon color={color} iconName={iconName} size={size} />
    </Button>
  );
}
