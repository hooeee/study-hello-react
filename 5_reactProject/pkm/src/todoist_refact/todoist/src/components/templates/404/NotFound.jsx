import { GoogleIcon } from "components/atoms";
import style from "./NotFound.module.css"

export function NotFound() {
  return (
    <div className={style.NotFoundMain}>
      <GoogleIcon iconName={"sms"} size={"300px"}></GoogleIcon>
      <h1>프로젝트를 추가해주세요.</h1>
      <GoogleIcon iconName={"keyboard_return"} size={"300px"}></GoogleIcon>
    </div>
  );
}

