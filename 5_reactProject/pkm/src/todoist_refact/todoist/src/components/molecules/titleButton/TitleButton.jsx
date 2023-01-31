import { Button, GoogleIcon, Label } from "components/atoms";
import style from "./TitleButton.module.css";
export function TitleButton({
  children,
  name,
  iconName,
  color,
  fontSize,
  variant,
}) {
  return (
    <div className={style.LabelMain}>
      <Label name={name} fontSize={fontSize}></Label>
      <div>
        <Button>
          <GoogleIcon
            iconName={iconName}
            color={color}
            size={"25px"}
          ></GoogleIcon>
          {children}
        </Button>
      </div>
    </div>
  );
}
